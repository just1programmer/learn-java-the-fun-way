import React from 'react'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage'
import Basic_java_fundamentals from '../pages/basic-java-fundamentals'
import Data_types from '../pages/data-types'
import Conditionals from '../pages/conditionals'
import Classes from '../pages/classes'
import Advanced_generics from '../pages/advanced-generics'
import Garbage_collection from '../pages/garbage-collection'
import Serialization from '../pages/serialization'
import Streams from '../pages/streams'
import Mocking_vs_mockito from '../pages/mocking-vs-mockito'
import What_is_internet from '../pages/what-is-internet'
import Browsers from '../pages/browsers'
import Version_control_systems from '../pages/version-control-systems'
import Nosql_databases from '../pages/nosql-databases'
import Variables from '../pages/variables'
import Functions from '../pages/functions'
import Data_structures from '../pages/data-structures'
import Oop from '../pages/oop'
import Interfaces from '../pages/interfaces'
import Packages from '../pages/packages'
import Apis from '../pages/apis'
import Loops from '../pages/loops'
import Working_with_files from '../pages/working-with-files'
import How_does_the_internet_work from '../pages/how-does-the-internet-work'
import Exception_handling from '../pages/exception-handling'
import Sockets from '../pages/sockets'
import How_jvm_works from '../pages/how-jvm-works'
import Memory_management from '../pages/memory-management'
import Maven from '../pages/maven'
import Play_framework from '../pages/play-framework'
import Collection_framework from '../pages/collection-framework'
import Networking from '../pages/networking'
import Build_tools from '../pages/build-tools'
import Ant from '../pages/ant'
import Gradle from '../pages/gradle'
import Spark from '../pages/spark'
import Jpa from '../pages/jpa'
import What_is_an_orm from '../pages/what-is-an-orm'
import What_is_http from '../pages/what-is-http'
import Jdbc from '../pages/jdbc'
import Log4j2 from '../pages/log4j2'
import Testing_your_apps from '../pages/testing-your-apps'
import Spring_boot from '../pages/spring-boot'
import Spring_data_jpa from '../pages/spring-data-jpa'
import Spring_introduction from '../pages/spring-introduction'
import Hibernate_intro from '../pages/hibernate-intro'
import Logging_frameworks from '../pages/logging-frameworks'
import Behavior_testing from '../pages/behavior-testing'
import Cucumber_JVM from '../pages/cucumber-JVM'
import Integration_testing from '../pages/integration-testing'
import JMeter from '../pages/JMeter'
import Backend from '../pages/backend'
import Unit_testing from '../pages/unit-testing'
import JUnit from '../pages/JUnit'
import Html_basics from '../pages/html-basics'
import Css_basics from '../pages/css-basics'
import Javascript_basics from '../pages/javascript-basics'
import Terminal_usage from '../pages/terminal-usage'
import Repo_hosting_services from '../pages/repo-hosting-services'
import About_git from '../pages/about-git'
import About_github from '../pages/about-github'
import About_gitlab from '../pages/about-gitlab'
import About_bitbucket from '../pages/bitbucket'
import Relational_databases from '../pages/relational-databases'
import PostgreSQL from '../pages/postgreSQL'
import Mongodb from '../pages/mongodb'
import Learn_about_apis from '../pages/learn-about-apis'
import Rest_apis from '../pages/rest-apis'
import Json from '../pages/json'
import Design_and_development_principles from '../pages/design-and-development-principles'
import Solid from '../pages/solid'
import Kiss from '../pages/kiss'
import Yagni from '../pages/yagni'
import Dry from '../pages/dry'
import Web_servers from '../pages/web-servers'
import Nginx from '../pages/nginx'
import What_is_scaling from '../pages/what-is-scaling'
import Home from '../pages/home'
import Sign_up from '../pages/sign-up'
import About_me from '../pages/about-me' 
import Header from './ui/Header'
import { Typography } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import theme from './ui/Theme'
import Contact from '../pages/contact'
import Project_Overview from '../pages/project-overview'

const App = ()=> {
    return(
        <Router>
            {/*Here we will use a Header component */}
            <ThemeProvider theme={theme}>
                <Header/>
            </ThemeProvider>
            <Routes>
                <Route path="/"/>
                <Route path='basic-java-fundamentals' element={<Basic_java_fundamentals/>}/>
                <Route path='data-types' element={<Data_types/>} />
                <Route path='variables' element={<Variables/>}/>
                <Route path='conditionals' element={<Conditionals/>}/>
                <Route path='functions' element={<Functions/>}/>
                <Route path='data-structures' element={<Data_structures/>}/>
                <Route path='oop' element={<Oop/>}/>
                <Route path='interfaces' element={<Interfaces/>}/>
                <Route path='classes' element={<Classes/>}/>
                <Route path='packages' element={<Packages/>}/>
                <Route path='working-with-files' element={<Working_with_files/>}/>
                <Route path='apis' element={<Apis/>}/>
                <Route path='loops' element={<Loops/>}/>
                <Route path='exception-handling' element={<Exception_handling/>}/>
                <Route path='advanced-generics' element={<Advanced_generics/>}/>
                <Route path='how-jvm-works' element={<How_jvm_works/>}/>
                <Route path='garbage-collection' element={<Garbage_collection/>}/>
                <Route path='collection-framework' element={<Collection_framework/>}/>
                <Route path='networking' element={<Networking/>}/>
                <Route path='sockets' element={<Sockets/>}/>
                <Route path='serialization' element={<Serialization/>}/>
                <Route path='memory-management' element={<Memory_management/>}/>
                <Route path='streams' element={<Streams/>}/>
                <Route path='build-tools' element={<Build_tools/>}/>
                <Route path='gradle' element={<Gradle/>}/>
                <Route path='maven' element={<Maven/>}/>
                <Route path='ant' element={<Ant/>}/>
                <Route path='spring-introductive' element={<Spring_introduction/>}/>
                <Route path='spring-boot' element={<Spring_boot/>}/>
                <Route path='play-framework' element={<Play_framework/>}/>
                <Route path='spark' element={<Spark/>}/>
                <Route path='what-is-an-orm' element={<What_is_an_orm/>}/>
                <Route path='jpa' element={<Jpa/>}/>
                <Route path='spring-data-jpa' element={<Spring_data_jpa/>}/>
                <Route path='hibernate-intro' element={<Hibernate_intro/>}/>
                <Route path='jdbc' element={<Jdbc/>}/>
                <Route path='logging-frameworks' element={<Logging_frameworks/>}/>
                <Route path='log4j2' element={<Log4j2/>}/>
                <Route path='testing-your-apps' element={<Testing_your_apps/>}/>
                <Route path='mocking-mockito' element={<Mocking_vs_mockito/>}/>
                <Route path='behavior-testing' element={<Behavior_testing/>}/>
                <Route path='cucumber-JVM' element={<Cucumber_JVM/>}/>
                <Route path='integration-testing' element={<Integration_testing/>}/>
                <Route path='JMeter' element={<JMeter/>}/>
                <Route path='unit-testing' element={<Unit_testing/>}/>
                <Route path='JUnit' element={<JUnit/>}/>
                <Route path='backend' element={<Backend/>}/>
                <Route path='what-is-internet' element={<What_is_internet/>}/>
                <Route path='how-does-the-internet-work' element={<How_does_the_internet_work/>}/>
                <Route path='what-is-http' element={<What_is_http/>}/>
                <Route path='browsers' element={<Browsers/>}/>
                <Route path='html-basics' element={<Html_basics/>}/>
                <Route path='css-basics' element={<Css_basics/>}/>
                <Route path='javascript-basics' element={<Javascript_basics/>}/>
                <Route path='terminal-usage' element={<Terminal_usage/>}/>
                <Route path='version-control-system' element={<Version_control_systems/>}/>
                <Route path='repo-hosting-services' element={<Repo_hosting_services/>}/>
                <Route path='git' element={<About_git/>}/>
                <Route path='github' element={<About_github/>}/>
                <Route path='gitlab' element={<About_gitlab/>}/>
                <Route path='bitbucket' element={<About_bitbucket/>}/>
                <Route path='relational-databases' element={<Relational_databases/>}/>
                <Route path='postgreSQL' element={<PostgreSQL/>}/>
                <Route path='NoSQL-Databases' element={<Nosql_databases/>}/>
                <Route path='MongoDB' element={<Mongodb/>}/>
                <Route path='Learn-about-APIs' element={<Learn_about_apis/>}/>
                <Route path='REST-apis' element={<Rest_apis/>}/>
                <Route path='JSON' element={<Json/>}/>
                <Route path='design-and-development-principles' element={<Design_and_development_principles/>}/>
                <Route path='solid' element={<Solid/>}/>
                <Route path='kiss' element={<Kiss/>}/>
                <Route path='yagni' element={<Yagni/>}/>
                <Route path='dry' element={<Dry/>}/>
                <Route path='web-servers' element={<Web_servers/>}/>
                <Route path='nginx' element={<Nginx/>}/>
                <Route path='what-is-scaling' element={<What_is_scaling/>}/>
                <Route path='home' element={<Home/>}/>
                <Route path='sign-up' element={<Sign_up/>}/>
                <Route path='about-me' element={<About_me/>}/>
                <Route path='contact' element={<Contact/>}/>
                <Route path='project-overview' element={<Project_Overview/>}/>
                <Route path='*' element={<ErrorPage/>} />
            </Routes>

            {/* Here we will use a Footer element */}
        </Router>
       
    )

}

export default App