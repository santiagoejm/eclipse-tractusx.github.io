---
id: Specification Digital Twin Kit
title: Developing with the DT Kit
description: 'Digital Twin Kit'
sidebar_position: 4
---


<!--
Development View of the Kit.
-->

<!-- !Mandatory! -->
## API Specifications

All openAPI-specifications for the Digital Twin Kit services are rendered in the section [of these docs](API%20Specs)

### Asset Administration Shell

The Asset Administration Shell (AAS) is a specification that is released by the Industrial Digital Twin Association 
[(IDTA)](https://industrialdigitaltwin.org/) with a perspective to be adopted by the International Electrotechnical 
Commission [(IEC)](https://www.iec.ch/homepage). 
Its mission is defining how “information about assets […] can be exchanged in a meaningful way between partners in a value
creation network”. As such, it is well-suited to contribute to the toolbox of Catena-X. While the Spec offers an extensive
suite of meta-model elements and APIs, Catena-X only uses a small subset. What exactly is defined in the Catena-X standard 
CX - 0002.

#### Submodels

An Asset Administration Shell is organized in Submodels. Each Submodel represents a self-contained aspect of an asset - 
typical examples are the Nameplate or AssemblyPartRelationship (which denotes the hierarchical composition of parts into
a whole). As different aspects of an Asset may be known to different parties on the value-chain, Submodels for a single asset
must be capable to run independently of each other. The specification explicitly allows this. Catena-X demands that Data 
Providers offer only a subset of the SubmodelServiceSpecification - namely the `$value` serialization. This is an abbreviated
notation of an AAS-Submodel that is focused on data instead of context. While it is advisable to expose Submodels with help of 
a full-fletched AAS-server SDK that provides the content-modifiers and API-endpoints out-of-the-box, this is not yet 
mandatory.

#### Digital Twin Registry

What Catena-X calls the "Digital Twin Registry" (DTR) is actually the union of two different services that the AAS specification
has specified. For the sake of simplicity, they are both defined in a single service. The DTR serves a similar function as the
index in a book: When trying to discover information, it's convenient to have an overview WHAT one will find and HOW to
access it. The registry caters exactly that information: For every asset it knows, it holds a number of Submodel Descriptors and in 
these, a consumer app will find information WHAT it will find (via the semanticId) and how to access the information (endpoint,
security setup etc.). As the information contained in the DTR may be sensitive and not be trusted with a central entity,
every data provider must offer his own DTR as an EDC Data Asset.

### Catena-X specific Services

DTRs hold sensitive information: a SubmodelDescriptor may not give access to the actual Submodel-data but all in cumulo hint at 
production volumes as each Twin represents an asset. Therefore, Catena-X implements decentral DTRs (DDTR), each running with a 
business partner. [In an IDTA-Whitepaper](https://industrialdigitaltwin.org/en/wp-content/uploads/sites/2/2023/06/Decentralized-Registries-Taxonomy-of-decentralized-registries-and-an-architectural-overview_.pdf ),
several high-level concepts for DDTRs are introduced. The AAS-specification remains agnostic to the approaches and endorses
none of them. Catena-X must deal with the additional complexity that stems from the interaction with the EDC.

Leveraging the native capabilities of the EDC and the EDC Discovery Service, Catena-X uses a discovery pattern that has the
same capability as a central [Digital Twin Registry](#digital-twin-registry): It allows to start a Discovery Process with only an AssetId and 
As none of the options fit the data-space-specific requirements of Catena-X entirely, yet a different approach is implemented:
However, in Catena-X some of the data is deemed so sensitive that a central authority can't be
trusted with it. Thus, each Data Provider will run their own DTR which poses a challenge for discovery. After all, a
Data Consumer must still find out the address where to fetch the data from. That's why Catena-X has introduced a 
three-step discovery pattern made up of the central microservices Discovery Finder, BPN Discovery (or several of them) 
and finally the EDC discovery that is part of the CX-Portal. They are also part of this Kit.

<!-- Recommended -->
## Sample Data

Generic sample data for relevant data objects is contained in the openAPI-specs of the respective services. This chapter 
contains data structures that are more specifically designed for use in the Digital Twin Kit. They are compliant with
the base-specifications (like AAS) but restrict the application even further for use in this dataspace.

### Registration at EDC

While the exact AAS-EDC-integration is at the discretion of each Kit and use case, there are good practices
that are likely to be standardized on the level of CX-0002 in the future. One relevant question is how the EDC-shielded services
of this Kit should register with the Asset endpoint of theEDC Management API. The following recommendations follow 
the data structure expected from tractusx-edc v0.4.1 onwards. It demands a json-ld structure. 

Json-ld is a serialization for RDF graphs (see[Resource Description Framework](https://www.w3.org/RDF/)). The json-ld 
`@context` section can declare the namespaces that resources explicitly mentioned in the rest of the document belong to.
It may also define default namespace with `@vocab` for resources without explicitly stated namespaces. Outside of
the "@context" section, the "@type" property always defines the class that an object belongs to.
As stated in the openAPI-specification of the EDC Management API's relevant endpoint, all entries in the `asset/properties`
object and the `privateProperties` object can be chosen freely. The section on the `dataAddress` is structured depending
on the `edc:type` property. The example below is determined by the [HttpDataAddress](https://github.com/eclipse-edc/Connector/blob/main/spi/common/core-spi/src/main/java/org/eclipse/edc/spi/types/domain/HttpDataAddress.java) 
class. Other implementations may require different parameters.

For successful discovery of Digital Twins, it is critical to register Submodels and Digital-Twin-Registries in a 
harmonized way. The following overview shall explain how the `asset/properties` section could be used. Bear in mind that 
this is a non-normative example.

- `@type` (mandatory): denotes the type of Asset that is registered. For all AAS-related endpoints, this shall be conformant to the
appropriate result of the AAS-description endpoint that returns URIs for the AAS service specification profiles denoting
the endpoint's capabilities.
- `rdfs:label` (optional): short name for asset.
- `rdfs:comment` (optional): free text property for human consumption.
- `dcat:version` (optional): version-string of the registered resource. Please note that the version of the AAS-spec is 
already considered in the `aas`-namespace.

The top-level `@id` field denotes the identifier of the resource that is being registered.

#### Digital Twin Registry as EDC Data Asset

The top-level `@id` field is mandatory but can (for a DTR) be chosen freely at registration since a DTR usually has no unique 
identifier.

```json
{
  "@context": {
    "@base": "http://myCompany.org/identifiers/",
    "sap": "https://sap.com/btp/ica/",
    "edc": "https://w3id.org/edc/v0.0.1/ns/",
    "dcat": "https://www.w3.org/ns/dcat/",
    "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
    "aas": "https://admin-shell.io/aas/API/3/0/",
    "aas-registry": "aas:AssetAdministrationShellRegistryServiceSpecification/",
    "aas-discovery": "aas:DiscoveryServiceSpecification/"
  },
    
  "@type": "edc:AssetEntryDto",
  "edc:asset": {
    "@id": "04a0993c-aa76-446f-a026-cb2ed62ea03f",
    "edc:properties": {
      "@type": ["aas-registry:SSP-001", "aas-discovery:SSP-002"],
      "rdfs:label": "Digital Twin Registry",
      "rdfs:comment": "DTR Endpoint of provider Processor_BackendIntegrationTests",
      "dcat:version": "0.0.1"
    },
    "edc:privateProperties": null
  },
  "edc:dataAddress": {
    "edc:type": "edc:HttpData",
    "edc:baseUrl": "https://mycompany.com/dtr/",
    "edc:authKey": "Authorization",
    "edc:authCode": "Basic XXX",
    "edc:proxyBody": "true",
    "edc:proxyPath": "true",
    "edc:proxyQueryParams": "true",
    "edc:proxyMethod": "true",
    "edc:contentType": "application/json"
  }
}
```


#### Submodel as EDC Data Asset

The following shows an example for registration of an AAS-Submodel as EDC Data Asset. The basic structure of the
`properties` section extends that of the DTR but additionally holds `hasSemantics:semanticId`. It is strongly 
recommended and shall signify the meaning of the Submodel's payload.

The top-level `@id` field should be equivalent to the id of the Submodel.
```json
{
  "@context": {
    "@base": "http://myCompany.org/identifiers/",
    "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
    "dcat": "https://www.w3.org/ns/dcat/",
    "odrl": "http://www.w3.org/ns/odrl/2/",
    "edc": "https://w3id.org/edc/v0.0.1/ns/",
    "aas": "https://admin-shell.io/aas/API/3/0/",
    "aas-submodel": "aas:SubmodelServiceSpecification/",
    "aas-semantics": "aas:hasSemantics/"
  },
  
  "@type": "edc:AssetEntryDto",
  "edc:asset": {
    "@id": "urn:uuid:ca180cf7-7ed6-4f53-b32f-d072d4cad834",
    "edc:properties": {
      "@type": "aas-submodel:SSP001",
      "rdfs:label": "PCF Data",
      "rdfs:comment": "Endpoint for PCF data",
      "dcat:version": "0.0.2",
      "aas-semantics:semanticId": "urn:bamm:io:pcf:4.0.1:Pcf",
      "edc:contentType": "application/json"
    },
    "edc:privateProperties": null,
   
  "edc:dataAddress": {
    "edc:type": "edc:HttpData",
    "edc:baseUrl": "https://tf-test8-greentoken-consumer-2.tf-test8.app.green-token.io/edc",
    "edc:authKey": "Authorization",
    "edc:authCode": "Basic XXX",
    "edc:proxyBody": "true",
    "edc:proxyPath": "true",
    "edc:proxyQueryParams": "true",
    "edc:proxyMethod": "true",
    "edc:contentType": "application/json"
  }
}
```

### Registration at Digital Twin Registry

The Submodel Descriptors in the DTR must not only follow the schema defined by the openAPI file. Additionally, it is 
imperative that the network mandates how they shall be populated with data. This is especially critical because the
data access is not straight-forward but passes through an EDC which the Data Consumer must negotiate with. That's why
the subprotocol body holds information on how to talk to the EDC's Data Plane.
````json
{
  "id": "<unique ID of submodel>",
  "semanticId": {
    "type": "ExternalReference",
    "keys": [
      {
        "type": "GlobalReference",
        "value": "urn:bamm:io.catenax.material_for_recycling:1.1.0#MaterialForRecycling"
      }
    ]
  },
  "endpoints": {
    "protocolInformation": {
      "href": "https://edc.data.plane/<path>/submodel",
      "endpointProtocol": "HTTP",
      "endpointProtocolVersion": [
        "1.1"
      ],
      "subprotocol": "DSP",
      "subprotocolBody": "<body with information required by subprotocol>",
      "subprotocolBodyEncoding": "plain",
      "securityAttributes": [
        {
          "type": "NONE",
          "key": "NONE",
          "value": "NONE"
        }
      ]
    },
    "interface": "SUBMODEL-3.0"
  }
}
````
Currently, this structure is still ambiguous (see `subprotocolBody`) but will be subject to further standardization introducing
more clarity across use cases and Kits.

<!-- Recommended -->

## Data Provisioning

### Patterns

Data Providers will usually follow one of two patterns:
1. Digital Twin Repository: Deploying a dedicated Repository for the persistence of digital twins and related data is the most
convenient way to get going with the AAS. Due to the risk of data duplication and unclear initial ingestion mechanisms,
it may not scale to industrial sizes.
2. Delegation: Wrapping another API or a database may deploy the Submodel API as a new facade. It delegates the incoming
requests to the respective backend systems. 

Offering data to the network requires mappings that are naturally dependent on the data source format. More on data integration
can be found in the corresponding [CX e.V. guide](https://catena-x.net/fileadmin/user_upload/04_Einfuehren_und_umsetzen/Onboarding/DataIntegrationPatterns_Guide_Final_V1.pdf).

### Register Digital Twins

As mentioned in CX - 0002, every Data Provider is required not only to deploy a DTR in his infrastructure but also to
register each of the Submodels. Otherwise, the data will not be discoverable by Data Consumers.