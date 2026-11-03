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
                    '30ee067583d497d0429b6260ceaad321': {
                        table: 'sys_script_include'
                        id: '30ee067583d497d0429b6260ceaad321'
                    }
                    '4c2f4e7583d497d0429b6260ceaad3d1': {
                        table: 'sys_script_include'
                        id: '4c2f4e7583d497d0429b6260ceaad3d1'
                    }
                    '5710ca7c83d05f90429b6260ceaad383': {
                        table: 'sys_script'
                        id: '5710ca7c83d05f90429b6260ceaad383'
                    }
                    '5df9e641835cdf90429b6260ceaad38c': {
                        table: 'sys_scope_privilege'
                        id: '5df9e641835cdf90429b6260ceaad38c'
                    }
                    '615fc2b583d497d0429b6260ceaad3f4': {
                        table: 'sys_script_include'
                        id: '615fc2b583d497d0429b6260ceaad3f4'
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
                    '786606f5835497d0429b6260ceaad3c3': {
                        table: 'sys_data_source'
                        id: '786606f5835497d0429b6260ceaad3c3'
                    }
                    '82ae4a3583d497d0429b6260ceaad309': {
                        table: 'sys_script_include'
                        id: '82ae4a3583d497d0429b6260ceaad309'
                    }
                    '926e423583d497d0429b6260ceaad3cf': {
                        table: 'sys_script_include'
                        id: '926e423583d497d0429b6260ceaad3cf'
                    }
                    '970702b1839497d0429b6260ceaad312': {
                        table: 'sys_script'
                        id: '970702b1839497d0429b6260ceaad312'
                    }
                    '9df9e2c5835cdf90429b6260ceaad3d5': {
                        table: 'sys_scope_privilege'
                        id: '9df9e2c5835cdf90429b6260ceaad3d5'
                    }
                    'audience-module': {
                        table: 'sys_app_module'
                        id: '0799b5b457494f679fdb14baec88976f'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: '02ecb8ce147f424099c384b03326fcc6'
                    }
                    cb275db4839c1f90429b6260ceaad346: {
                        table: 'sys_script_include'
                        id: 'cb275db4839c1f90429b6260ceaad346'
                    }
                    de664a71839497d0429b6260ceaad3f8: {
                        table: 'sys_app_module'
                        id: 'de664a71839497d0429b6260ceaad3f8'
                    }
                    edf9e2c5835cdf90429b6260ceaad3f8: {
                        table: 'sys_scope_privilege'
                        id: 'edf9e2c5835cdf90429b6260ceaad3f8'
                    }
                    fc578ef1839497d0429b6260ceaad328: {
                        table: 'sys_transform_map'
                        id: 'fc578ef1839497d0429b6260ceaad328'
                    }
                    'fmqa-menu': {
                        table: 'sys_app_application'
                        id: '909321c447d946369251b50281daf536'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '135f57da808247b0b1e88b3352b75d11'
                    }
                    'quiz-module': {
                        table: 'sys_app_module'
                        id: '4cf11341c46045c28423af2d0f6d6a7f'
                    }
                }
                composite: [
                    {
                        table: 'sys_transform_entry'
                        id: '01d74275839497d0429b6260ceaad3fb'
                        key: {
                            map: 'fc578ef1839497d0429b6260ceaad328'
                            target_field: 'date'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0359ce39839497d0429b6260ceaad3d0'
                        key: {
                            sys_ui_section: {
                                id: '0f59ca39839497d0429b6260ceaad371'
                                key: {
                                    name: 'x_0221_fmqa_imp_quiz'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'u_date'
                            position: '2'
                        }
                    },
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
                        id: '0b59ce39839497d0429b6260ceaad3d3'
                        key: {
                            sys_ui_section: {
                                id: '0f59ca39839497d0429b6260ceaad371'
                                key: {
                                    name: 'x_0221_fmqa_imp_quiz'
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
                        table: 'sn_glider_source_artifact_m2m'
                        id: '0cefbd3d1b9e430990d9e331dd44ba47'
                        key: {
                            application_file: '4542055b8ef443088824a076b3928797'
                            source_artifact: '78a2730c3c964d3e9438b97cc4568aad'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '0f59ca39839497d0429b6260ceaad371'
                        key: {
                            name: 'x_0221_fmqa_imp_quiz'
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
                        id: '0f59ce39839497d0429b6260ceaad3d1'
                        key: {
                            sys_ui_section: {
                                id: '0f59ca39839497d0429b6260ceaad371'
                                key: {
                                    name: 'x_0221_fmqa_imp_quiz'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'u_full_name'
                            position: '4'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '149b5b09626b4252b968dd92319173e8'
                        key: {
                            application_file: '9fd8edf458d741bc8a20858e93fa43a0'
                            source_artifact: '78a2730c3c964d3e9438b97cc4568aad'
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
                        table: 'sys_dictionary'
                        id: '22e6dd429bf94315a6869a1332790330'
                        key: {
                            name: 'x_0221_fmqa_imp_quiz'
                            element: 'u_date'
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
                        table: 'sys_dictionary'
                        id: '2cf3aae4c3714e7d95e6e4e2ecbfa642'
                        key: {
                            name: 'x_0221_fmqa_imp_quiz'
                            element: 'u_number_old'
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
                        table: 'sys_transform_entry'
                        id: '3138ce75839497d0429b6260ceaad328'
                        key: {
                            map: 'fc578ef1839497d0429b6260ceaad328'
                            target_field: 'description'
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
                        table: 'ua_table_licensing_config'
                        id: '405c0df73a254d51a02cf490aeab2936'
                        key: {
                            name: 'x_0221_fmqa_imp_quiz'
                        }
                    },
                    {
                        table: 'sys_ui_page'
                        id: '4542055b8ef443088824a076b3928797'
                        key: {
                            endpoint: 'x_0221_fmqa_incident_manager_page.do'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '45d74a35839497d0429b6260ceaad3fc'
                        key: {
                            map: 'fc578ef1839497d0429b6260ceaad328'
                            target_field: 'name'
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
                        table: 'sys_dictionary'
                        id: '5eb343614a184a79bde55087106e7eb3'
                        key: {
                            name: 'x_0221_fmqa_imp_quiz'
                            element: 'NULL'
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
                        table: 'sn_glider_source_artifact_m2m'
                        id: '6c52798d1f084d17b4f9be2618b36a68'
                        key: {
                            application_file: '32c47991bc8f43fda07ca788c548254f'
                            source_artifact: '78a2730c3c964d3e9438b97cc4568aad'
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
                        table: 'sn_glider_source_artifact_m2m'
                        id: '7670a45b8c594c12b1dc2c30bef710d3'
                        key: {
                            application_file: '61e4c34064e74ab9ae9e6618258bc926'
                            source_artifact: '78a2730c3c964d3e9438b97cc4568aad'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact'
                        id: '78a2730c3c964d3e9438b97cc4568aad'
                        key: {
                            name: 'x_0221_fmqa_incident_manager_page.do - BYOUI Files'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '790b4a6d7f6c4b8f87aa75836cfde194'
                        key: {
                            name: 'x_0221_fmqa_imp_quiz'
                            element: 'u_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7c9dced8dde2489f90fa5f27634c1ce5'
                        key: {
                            name: 'x_0221_fmqa_imp_quiz'
                            element: 'u_full_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8359ce39839497d0429b6260ceaad3cf'
                        key: {
                            sys_ui_section: {
                                id: '0f59ca39839497d0429b6260ceaad371'
                                key: {
                                    name: 'x_0221_fmqa_imp_quiz'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'u_name'
                            position: '1'
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
                        table: 'sys_ui_element'
                        id: '8b59ce39839497d0429b6260ceaad3cd'
                        key: {
                            sys_ui_section: {
                                id: '0f59ca39839497d0429b6260ceaad371'
                                key: {
                                    name: 'x_0221_fmqa_imp_quiz'
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
                        id: '8b59ce39839497d0429b6260ceaad3d2'
                        key: {
                            sys_ui_section: {
                                id: '0f59ca39839497d0429b6260ceaad371'
                                key: {
                                    name: 'x_0221_fmqa_imp_quiz'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'u_number_old'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8f59ce39839497d0429b6260ceaad3d0'
                        key: {
                            sys_ui_section: {
                                id: '0f59ca39839497d0429b6260ceaad371'
                                key: {
                                    name: 'x_0221_fmqa_imp_quiz'
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
                        table: 'sys_ux_lib_asset'
                        id: '9fd8edf458d741bc8a20858e93fa43a0'
                        key: {
                            name: 'x_0221_fmqa/pages/incidentManager/main'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: 'a3bd4c0d989941b1855f1e66bbdd2203'
                        key: {
                            application_file: 'af288e16ea614617a9bbeb41ad69f408'
                            source_artifact: '78a2730c3c964d3e9438b97cc4568aad'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'aa5adfb57c2148b79f45f70d0640c31a'
                        key: {
                            name: 'x_0221_fmqa_imp_quiz'
                            element: 'NULL'
                            language: 'en'
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
                        table: 'sys_ux_lib_asset'
                        id: 'af288e16ea614617a9bbeb41ad69f408'
                        key: {
                            name: 'x_0221_fmqa/pages/incidentManager/main.js.map'
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
                        table: 'sys_dictionary'
                        id: 'b340eac5ddbc4efb838c502af092c6f8'
                        key: {
                            name: 'x_0221_fmqa_imp_quiz'
                            element: 'u_full_name'
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
                        table: 'sys_documentation'
                        id: 'b54ef42bad5b4a73aec00b6da0e26f20'
                        key: {
                            name: 'x_0221_fmqa_imp_quiz'
                            element: 'u_number_old'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'b5660a71839497d0429b6260ceaad32f'
                        key: {
                            name: 'x_0221_fmqa_imp_quiz'
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
                        table: 'sys_dictionary'
                        id: 'd9af20af6e6349d298cfa744beadbee4'
                        key: {
                            name: 'x_0221_fmqa_imp_quiz'
                            element: 'u_name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd9aff4bd61ae4c3db28f8e6fa3952ffe'
                        key: {
                            name: 'x_0221_fmqa_imp_quiz'
                            element: 'u_date'
                            language: 'en'
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
                        table: 'sys_ux_lib_asset'
                        id: 'e9255e16bb1e4309bb857338f6ffdc35'
                        key: {
                            name: 'x_0221_fmqa/pages/incidentManager/main'
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
                    {
                        table: 'sys_ux_lib_asset'
                        id: 'fd21566225b14924b27495737c48b277'
                        key: {
                            name: 'x_0221_fmqa/pages/incidentManager/main.js.map'
                        }
                    },
                ]
            }
        }
    }
}
