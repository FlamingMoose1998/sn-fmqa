import "@servicenow/sdk/global";
import { ApplicationMenu, Record } from "@servicenow/sdk/core";

const appMenu = ApplicationMenu({
    $id: Now.ID["menu-fmqa"],
    title: "FMQA",
    hint: "Quiz management application",
    active: true,
});

Record({
    $id: Now.ID["separator-main-data"],
    table: "sys_app_module",
    data: {
        title: "Main data",
        application: appMenu,
        link_type: "SEPARATOR",
        active: true,
        order: 1000,
    },
});

Record({
    $id: Now.ID["module-quiz"],
    table: "sys_app_module",
    data: {
        title: "Quizzes",
        application: appMenu,
        link_type: "LIST",
        name: "x_0221_fmqa_quiz",
        active: true,
        order: 1010,
    },
});

Record({
    $id: Now.ID["module-round"],
    table: "sys_app_module",
    data: {
        title: "Rounds",
        application: appMenu,
        link_type: "LIST",
        name: "x_0221_fmqa_round",
        active: true,
        order: 1020,
    },
});

Record({
    $id: Now.ID["module-question"],
    table: "sys_app_module",
    data: {
        title: "Questions",
        application: appMenu,
        link_type: "LIST",
        name: "x_0221_fmqa_question",
        active: true,
        order: 1030,
    },
});

Record({
    $id: Now.ID["separator-support-data"],
    table: "sys_app_module",
    data: {
        title: "Support data",
        application: appMenu,
        link_type: "SEPARATOR",
        active: true,
        order: 2000,
    },
});


Record({
    $id: Now.ID["module-category"],
    table: "sys_app_module",
    data: {
        title: "Categories",
        application: appMenu,
        link_type: "LIST",
        name: "x_0221_fmqa_category",
        active: true,
        order: 2010,
    },
});

Record({
    $id: Now.ID["module-audience"],
    table: "sys_app_module",
    data: {
        title: "Audiences",
        application: appMenu,
        link_type: "LIST",
        name: "x_0221_fmqa_audience",
        active: true,
        order: 2020,
    },
});

Record({
    $id: Now.ID["module-raw-json"],
    table: "sys_app_module",
    data: {
        title: "Raw JSON",
        application: appMenu,
        link_type: "LIST",
        name: "x_0221_fmqa_raw_json",
        active: true,
        order: 2030,
    },
});

Record({
    $id: Now.ID["separator-development"],
    table: "sys_app_module",
    data: {
        title: "Development",
        application: appMenu,
        link_type: "SEPARATOR",
        active: true,
        order: 3000,
    },
});

Record({
    $id: Now.ID["module-script-includes"],
    table: "sys_app_module",
    data: {
        title: "Script includes",
        application: appMenu,
        link_type: "LIST",
        name: "sys_script_include",
        filter: 'sys_scope=5fdf85b4835c1f90429b6260ceaad33b',
        active: true,
        order: 3010,
    },
});

