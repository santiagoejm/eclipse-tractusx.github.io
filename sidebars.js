/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    docs: [
        'introduction',
        {
            type: 'category',
            label: 'Products',
            link: {
                type: 'generated-index',
            },
            collapsed: true,
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'products',
                },
            ],
        },
    ],
    developer: [
        'developer',
        {
            type: 'category',
            label: 'Release Guidelines',
            link: {
                type: 'doc',
                id: 'release'
            },
            collapsed: true,
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'release',
                },
            ],
        },
        {
            type: 'category',
            label: 'Open Source Development',
            link: {
                type: 'generated-index',
            },
            collapsed: true,
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'oss',
                },
            ],
        },
        'github-checks'
    ],
    kits: [
        {
            type: 'category',
            label: 'Business Partner Kit',
            link: {
                type: 'generated-index',
            },
            collapsed: true,
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'kits/Business Partner Kit',
                },
            ],
        },
        {
            type: 'category',
            label: 'Data Chain Kit',
            // link: {
            //     type: 'generated-index',
            // },
            link: {
                type: 'doc',
                id: 'kits/Data Chain Kit/DCK'
            },
            collapsed: true,
            items: [
                'kits/Data Chain Kit/data chain kit changelog',
                'kits/Data Chain Kit/Adoption View',
                'kits/Data Chain Kit/Operation View',
                {
                    type: 'autogenerated',
                    dirName: 'kits/Data Chain Kit/Documentation'
                },
                {
                    type: 'category',
                    label: 'Development View',
                    link: {
                        type: 'doc',
                        id: 'kits/Data Chain Kit/Software Development View/Specification'
                    },
                    items:[
                        {
                            type: 'autogenerated',
                            dirName: 'kits/Data Chain Kit/Software Development View/Job Api'
                        }
                    ]
                },
                {
                    type: 'category',
                    label: 'Success Stories',
                    items:[
                        'kits/Data Chain Kit/Success Stories/Trace-X Sucess Story',
                        'kits/Data Chain Kit/Success Stories/Circularity Dashboard Sucess Story'
                    ]
                },
            ],
        },
        {
            type: 'category',
            label: 'Connector Kit',
            /*link: {
                type: 'doc',
                id: 'kits/product-edc/docs/kit/adoption-view/adoption-view',
            },*/
            link: {
                type: 'generated-index',
            },
            collapsed: true,
            items: [
                'kits/product-edc/CHANGELOG',
                'kits/product-edc/docs/kit/adoption-view/Adoption View',
                {
                    type: 'category',
                    label: 'Development View',
                    link: {
                        type: 'doc',
                        id: 'kits/product-edc/docs/kit/development-view/page00_development_view',
                    },
                    collapsed: true,
                    items: [
                        'kits/product-edc/docs/README',
                        'kits/product-edc/docs/kit/adoption-view/Domain Model',
                        {
                            type: 'autogenerated',
                            dirName: 'kits/product-edc/docs/kit/development-view/openAPI'
                        },
                        {
                            type: 'category',
                            label: 'edc-controlplane',
                            collapsed: true,
                            items: [
                                {
                                    type: 'autogenerated',
                                    dirName: 'kits/product-edc/edc-controlplane',
                                },
                            ]
                        },
                        {
                            type: 'category',
                            label: 'edc-dataplane',
                            collapsed: true,
                            items: [
                                {
                                    type: 'autogenerated',
                                    dirName: 'kits/product-edc/edc-dataplane',
                                },
                            ]
                        },
                        {
                            type: 'category',
                            label: 'edc-extensions',
                            collapsed: true,
                            items: [
                                {
                                    type: 'autogenerated',
                                    dirName: 'kits/product-edc/edc-extensions',
                                },
                            ]
                        },
                        'kits/product-edc/edc-tests/README',
                        'kits/product-edc/docs/development/Release'

                    ],
                },
                {
                    type: 'category',
                    label: 'Operation View',
                    link: {
                        type: 'doc',
                        id: 'kits/product-edc/docs/kit/operation-view/page00_operation_view',
                    },
                    collapsed: true,
                    items: [
                        'kits/product-edc/docs/kit/operation-view/page10_extensions',
                        {
                            type: 'category',
                            label: 'Charts',
                            collapsed: true,
                            items: [
                                'kits/product-edc/edc-tests/src/main/resources/deployment/helm/omejdn/README',
                                {
                                    type: 'autogenerated',
                                    dirName: 'kits/product-edc/charts',
                                },
                                'kits/product-edc/edc-tests/src/main/resources/deployment/helm/omejdn/README',
                                'kits/product-edc/edc-tests/src/main/resources/deployment/helm/supporting-infrastructure/README',
                            ]
                        },
                        {
                            type: 'category',
                            label: 'Samples',
                            link: {
                                type: 'doc',
                                id: 'kits/product-edc/docs/samples/README',
                            },
                            collapsed: true,
                            items: [
                                'kits/product-edc/docs/samples/Local TXDC Setup',
                                'kits/product-edc/docs/samples/Transfer Data',
                                'kits/product-edc/docs/samples/data-plane-http-oauth2'
                            ]
                        },
                        'kits/product-edc/docs/development/postman/README',
                        'kits/product-edc/docs/kit/operation-view/page02_technical_prerequisites',
                        'kits/product-edc/docs/kit/operation-view/page03_local_setup_controlplane',
                        'kits/product-edc/docs/kit/operation-view/page04_local_setup_dataplane',
                        'kits/product-edc/docs/kit/operation-view/page05_argocd',
                        'kits/product-edc/docs/kit/operation-view/page06_kubernetes_setup',
                        'kits/product-edc/docs/kit/operation-view/page07_tests',
                        'kits/product-edc/docs/kit/operation-view/page08_api',
                        'kits/product-edc/docs/kit/operation-view/page09_upgrading',
                    ]
                },
                {
                    type: 'category',
                    label: 'Documentation',
                    collapsed: true,
                    items: [
                        'kits/product-edc/docs/kit/development-view/page02_repository_structure',
                        'kits/product-edc/docs/kit/development-view/page03_project_structure',
                        {
                            type: 'category',
                            label: 'Migration',
                            
                            collapsed: true,
                            items: [
                                {
                                    type: 'autogenerated',
                                    dirName: 'kits/product-edc/docs/migration',
                                },
                            ]
                        },
                    ]
                },
            ]
        },
        {
          type: 'category',
          label: 'DCM Kit',
          link: {
              type: 'generated-index',
          },
          collapsed: true,
          items: [
              {
                  type: 'autogenerated',
                  dirName: 'kits/DCM-Kit',
              },
          ],
      },
    ],
};

module.exports = sidebars;
