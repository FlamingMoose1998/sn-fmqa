import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    '11f9e2c5835cdf90429b6260ceaad3db': {
                        table: 'sys_scope_privilege'
                        id: '11f9e2c5835cdf90429b6260ceaad3db'
                    }
                    '21f9e2c5835cdf90429b6260ceaad3f5': {
                        table: 'sys_scope_privilege'
                        id: '21f9e2c5835cdf90429b6260ceaad3f5'
                    }
                    '5710ca7c83d05f90429b6260ceaad383': {
                        table: 'sys_script'
                        id: '5710ca7c83d05f90429b6260ceaad383'
                    }
                    '5df9e641835cdf90429b6260ceaad38c': {
                        table: 'sys_scope_privilege'
                        id: '5df9e641835cdf90429b6260ceaad38c'
                    }
                    '6280027483145f90429b6260ceaad3f3': {
                        table: 'sys_script_client'
                        id: '6280027483145f90429b6260ceaad3f3'
                    }
                    '738cfdf883d05f90429b6260ceaad39e': {
                        table: 'sys_script'
                        id: '738cfdf883d05f90429b6260ceaad39e'
                        deleted: true
                    }
                    '9df9e2c5835cdf90429b6260ceaad3d5': {
                        table: 'sys_scope_privilege'
                        id: '9df9e2c5835cdf90429b6260ceaad3d5'
                    }
                    'audience-module': {
                        table: 'sys_app_module'
                        id: 'a3eb331248f84d298c69c6c5eb4101a5'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: '02ecb8ce147f424099c384b03326fcc6'
                    }
                    cb275db4839c1f90429b6260ceaad346: {
                        table: 'sys_script_include'
                        id: 'cb275db4839c1f90429b6260ceaad346'
                    }
                    edf9e2c5835cdf90429b6260ceaad3f8: {
                        table: 'sys_scope_privilege'
                        id: 'edf9e2c5835cdf90429b6260ceaad3f8'
                    }
                    'fmqa-menu': {
                        table: 'sys_app_application'
                        id: '165ac4f10d12485eb37569f86426fe3c'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '135f57da808247b0b1e88b3352b75d11'
                    }
                    'quiz-module': {
                        table: 'sys_app_module'
                        id: '076dc193fa6d4d84b326ae87c7eaca57'
                    }
                }
                composite: [
                    {
                        table: 'sys_documentation'
                        id: '0949f045a6db460d9d3f2c20452e6202'
                        key: {
                            name: 'x_0221_fmqa_audience'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '14ad55b483dc1f90429b6260ceaad323'
                        key: {
                            sys_ui_section: {
                                id: 'ccad15b483dc1f90429b6260ceaad3ca'
                                key: {
                                    name: 'x_0221_fmqa_quiz'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'date'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '1635ea8e40004b77a58863b1dab33b65'
                        key: {
                            name: 'x_0221_fmqa_audience'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '16fa5aa280c44d129d71922f5912ff68'
                        key: {
                            application_file: '2eb17d353ade489288c06adeb7d3bf35'
                            source_artifact: '6fcaffe7ba9e4df9a39103b43379dd51'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '18e2828387ba4094baf0c7848c81e20f'
                        key: {
                            application_file: '32c47991bc8f43fda07ca788c548254f'
                            source_artifact: '6fcaffe7ba9e4df9a39103b43379dd51'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '222b85961ae149efbe22a4e6730b3864'
                        key: {
                            application_file: 'ed26a6558ab14ca09379bc447fa66483'
                            source_artifact: '6fcaffe7ba9e4df9a39103b43379dd51'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2619d86983d0d3d0429b6260ceaad36c'
                        key: {
                            sys_ui_section: {
                                id: '6219dce583d0d3d0429b6260ceaad3ca'
                                key: {
                                    name: 'x_0221_fmqa_audience'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'name'
                            position: '0'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '2b2f90aff7a6451ca207923f5d76641a'
                        key: {
                            name: 'x_0221_fmqa_audience'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '2eb17d353ade489288c06adeb7d3bf35'
                        key: {
                            name: 'x_0221_fmqa/main'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2f7e690fdacd49d4a292d2474ad198e4'
                        key: {
                            name: 'x_0221_fmqa_quiz'
                            element: 'audience'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '32c47991bc8f43fda07ca788c548254f'
                        key: {
                            name: 'x_0221_fmqa/vendor-react-dom--55da69dc'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '34d639383c6f420a8fbb63ea8e698f80'
                        key: {
                            name: 'x_0221_fmqa_audience'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3748dce583d0d3d0429b6260ceaad364'
                        key: {
                            sys_ui_section: {
                                id: 'ccad15b483dc1f90429b6260ceaad3ca'
                                key: {
                                    name: 'x_0221_fmqa_quiz'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_page'
                        id: '39524dd05b8d4b10b521bdf140687bc6'
                        key: {
                            endpoint: 'x_0221_fmqa_incident_manager.do'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3977e464a8474be095223b90b188b521'
                        key: {
                            name: 'x_0221_fmqa_quiz'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3cc96d76b9f0439fb981257a30273d94'
                        key: {
                            name: 'x_0221_fmqa_quiz'
                            element: 'date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4b5d0d6d8398d3d0429b6260ceaad3a7'
                        key: {
                            sys_ui_section: {
                                id: 'ccad15b483dc1f90429b6260ceaad3ca'
                                key: {
                                    name: 'x_0221_fmqa_quiz'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'description'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '58ad55b483dc1f90429b6260ceaad322'
                        key: {
                            sys_ui_section: {
                                id: 'ccad15b483dc1f90429b6260ceaad3ca'
                                key: {
                                    name: 'x_0221_fmqa_quiz'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '61e4c34064e74ab9ae9e6618258bc926'
                        key: {
                            name: 'x_0221_fmqa/vendor-react-dom--55da69dc.js.map'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '6219dce583d0d3d0429b6260ceaad3ca'
                        key: {
                            name: 'x_0221_fmqa_audience'
                            caption: 'NULL'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '660f0ad715af4d73a9ca2c267d8324bc'
                        key: {
                            name: 'x_0221_fmqa_quiz'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6a343f9b8ddc42f0916de54a28d6ad21'
                        key: {
                            name: 'x_0221_fmqa_quiz'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact'
                        id: '6fcaffe7ba9e4df9a39103b43379dd51'
                        key: {
                            name: 'x_0221_fmqa_incident_manager.do - BYOUI Files'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '846a7f9020eb45b9a0e2c8feb1c67c10'
                        key: {
                            name: 'x_0221_fmqa_quiz'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8515366845ac4729a8967f2244a1c817'
                        key: {
                            name: 'x_0221_fmqa_quiz'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8754cd7f4bee46a7ba1c874b70a311b4'
                        key: {
                            name: 'x_0221_fmqa_quiz'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '88ffb87c9b4041128c8d1966aedf247e'
                        key: {
                            name: 'x_0221_fmqa_audience'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '96389c39368a437ab62e14af81e2b347'
                        key: {
                            name: 'x_0221_fmqa_quiz'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '96f0ffaa08eb4346a83f74b183356b43'
                        key: {
                            application_file: '61e4c34064e74ab9ae9e6618258bc926'
                            source_artifact: '6fcaffe7ba9e4df9a39103b43379dd51'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9aa10567fc6c496aa80ce4ae039ce864'
                        key: {
                            name: 'x_0221_fmqa_quiz'
                            element: 'audience'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9cad55b483dc1f90429b6260ceaad31f'
                        key: {
                            sys_ui_section: {
                                id: 'ccad15b483dc1f90429b6260ceaad3ca'
                                key: {
                                    name: 'x_0221_fmqa_quiz'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9cad55b483dc1f90429b6260ceaad321'
                        key: {
                            sys_ui_section: {
                                id: 'ccad15b483dc1f90429b6260ceaad3ca'
                                key: {
                                    name: 'x_0221_fmqa_quiz'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'name'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'accdd5a9332a4b9a8255c1ab3d1d83f0'
                        key: {
                            name: 'x_0221_fmqa_audience'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b1d73888ec0d4e7fba93e7904dfe9445'
                        key: {
                            name: 'x_0221_fmqa_quiz'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'b286aacd831cdf90429b6260ceaad3a7'
                        key: {
                            category: 'x_0221_fmqa_quiz'
                            prefix: 'QUIZ'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'b4a2dd7157aa40f3b64901cfe83e5ce9'
                        key: {
                            name: 'x_0221_fmqa_quiz'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b748dce583d0d3d0429b6260ceaad363'
                        key: {
                            sys_ui_section: {
                                id: 'ccad15b483dc1f90429b6260ceaad3ca'
                                key: {
                                    name: 'x_0221_fmqa_quiz'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'audience'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c0fcccebd8084039a51a50d1b03ab8c5'
                        key: {
                            name: 'x_0221_fmqa_quiz'
                            element: 'date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c1a9e86f8c094b36b9f7b25c4178ff16'
                        key: {
                            name: 'x_0221_fmqa_quiz'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'ccad15b483dc1f90429b6260ceaad3ca'
                        key: {
                            name: 'x_0221_fmqa_quiz'
                            caption: 'NULL'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd0ad55b483dc1f90429b6260ceaad321'
                        key: {
                            sys_ui_section: {
                                id: 'ccad15b483dc1f90429b6260ceaad3ca'
                                key: {
                                    name: 'x_0221_fmqa_quiz'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'dcad55b483dc1f90429b6260ceaad323'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'ccad15b483dc1f90429b6260ceaad3ca'
                                key: {
                                    name: 'x_0221_fmqa_quiz'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '5'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: 'ebfa4f0ae77f4a9a891f1394a04d4f28'
                        key: {
                            application_file: '39524dd05b8d4b10b521bdf140687bc6'
                            source_artifact: '6fcaffe7ba9e4df9a39103b43379dd51'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: 'ed26a6558ab14ca09379bc447fa66483'
                        key: {
                            name: 'x_0221_fmqa/main.js.map'
                        }
                    },
                ]
            }
        }
    }
}
