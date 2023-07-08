import gcp from '../assets/skills/gcp.svg'
import html from '../assets/skills/html.svg'
import docker from '../assets/skills/docker.svg'
import css from '../assets/skills/css.svg'
import angular from '../assets/skills/angular.svg'
import javascript from '../assets/skills/javascript.svg'
import nextJS from '../assets/skills/nextJS.svg'
import react from '../assets/skills/react.svg'
import typescript from '../assets/skills/typescript.svg'
import bootstrap from '../assets/skills/bootstrap.svg'
import mongoDB from '../assets/skills/mongoDB.svg'
import mysql from '../assets/skills/mysql.svg'
import postgresql from '../assets/skills/postgresql.svg'
import tailwind from '../assets/skills/tailwind.svg'
import c from '../assets/skills/c.svg'
import cplusplus from '../assets/skills/cplusplus.svg'
import go from '../assets/skills/go.svg'
import java from '../assets/skills/java.svg'
import matlab from '../assets/skills/matlab.svg'
import python from '../assets/skills/python.svg'
import aws from '../assets/skills/aws.svg'
import firebase from '../assets/skills/firebase.svg'
import git from '../assets/skills/git.svg'
import graphql from '../assets/skills/graphql.svg'
import materialui from '../assets/skills/materialui.svg'
import numpy from '../assets/skills/numpy.svg'
import opencv from '../assets/skills/opencv.svg'
import pytorch from '../assets/skills/pytorch.svg'
import tensorflow from '../assets/skills/tensorflow.svg'
import wordpress from '../assets/skills/wordpress.svg'
import figma from '../assets/skills/figma.svg'
import markdown from '../assets/skills/markdown.svg'


export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'gcp':
            return gcp;
        case 'html':
            return html;
        case 'docker':
            return docker;
        case 'css':
            return css;
        case 'angular':
            return angular;
        case 'javascript':
            return javascript;
        case 'next js':
            return nextJS;
        case 'react':
            return react;
        case 'typescript':
            return typescript;
        case 'bootstrap':
            return bootstrap;
        case 'mongodb':
            return mongoDB;
        case 'mysql':
            return mysql;
        case 'postgresql':
            return postgresql;
        case 'tailwind':
            return tailwind;
        case 'c':
            return c;
        case 'c++':
            return cplusplus;
        case 'go':
            return go;
        case 'java':
            return java;
        case 'matlab':
            return matlab;
        case 'python':
            return python;
        case 'aws':
            return aws;
        case 'firebase':
            return firebase;
        case 'git':
            return git;
        case 'graphql':
            return graphql;
        case 'materialui':
            return materialui;
        case 'numpy':
            return numpy;
        case 'opencv':
            return opencv;
        case 'pytorch':
            return pytorch;
        case 'tensorflow':
            return tensorflow;
        case 'wordpress':
            return wordpress;
        case 'figma':
            return figma;
        case 'markdown':
            return markdown;
        default:
            break;
    }
}
