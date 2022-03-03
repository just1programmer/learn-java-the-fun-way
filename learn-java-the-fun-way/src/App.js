import React from 'react'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'
import Basic_java_fundamentals from './pages/basic-java-fundamentals'

const App = ()=> {

    
    return(
        <Router>
            {/*Here we will use a Header component */}
            <h1>Hallo</h1>
            <Routes>
                <Route path="/"/>
                <Route path='basic-java-fundamentals' element={<Basic_java_fundamentals/>}/>
                <Route path='data-types' element={} />
                <Route path='variables' element={}/>
                <Route path='conditionals' element={}/>
                <Route path='functions' element={}/>
                <Route path='data-structures' element={}/>
                <Route path='oop' element={}/>
                <Route path='interfaces' element={}/>
                <Route path='classes' element={}/>
                <Route path='packages' element={}/>
                <Route path='working-with-files' element={}/>
                <Route path='apis' element={}/>
                <Route path='loops' element={}/>
                <Route path='exception-handling' element={}/>
                <Route path='advanced-generics' element={}/>
                <Route path='how-jvm-works' element={}/>
                <Route path='garbage-collection' element={}/>
                <Route path='collection-framework' element={}/>
                <Route path='networking' element={}/>
                <Route path='sockets' element={}/>
                <Route path='serialization' element={}/>
                <Route path='memory-management' element={}/>
                <Route path='streams' element={}/>
                <Route path='build-tools' element={}/>
                <Route path='gradle' element={}/>
                <Route path='maven' element={}/>
                <Route path='ant' element={}/>
                <Route path='spring-introductive' element={}/>
                <Route path='spring-boot' element={}/>
                <Route path='play-framework' element={}/>
                <Route path='spark' element={}/>
                <Route path='what-is-an-orm' element={}/>
                <Route path='jpa' element={}/>
                <Route path='spring-data-jpa' element={}/>
                <Route path='hibernate-intro' element={}/>
                <Route path='jdbc' element={}/>
                <Route path='logging-frameworks' element={}/>
                <Route path='log4j2' element={}/>
                <Route path='testing-your-apps' element={}/>
                <Route path='mocking-mockito' element={}/>
                <Route path='behavior-testing' element={}/>
                <Route path='cucumber-JVM' element={}/>
                <Route path='integration-testing' element={}/>
                <Route path='JMeter' element={}/>
                <Route path='unit-testing' element={}/>
                <Route path='JUnit' element={}/>
                <Route path='backend' element={}/>
                <Route path='what-is-internet' element={}/>
                <Route path='how-does-the-internet-work' element={}/>
                <Route path='what-is-http' element={}/>
                <Route path='browsers' element={}/>
                <Route path='html-basics' element={}/>
                <Route path='css-basics' element={}/>
                <Route path='javascript-basics' element={}/>
                <Route path='terminal-usage' element={}/>
                <Route path='version-control-system' element={}/>
                <Route path='repo-hosting-services' element={}/>
                <Route path='git' element={}/>
                <Route path='github' element={}/>
                <Route path='gitlab' element={}/>
                <Route path='bitbucket' element={}/>
                <Route path='relational-databases' element={}/>
                <Route path='postgreSQL' element={}/>
                <Route path='NoSQL-Databases' element={}/>
                <Route path='MongoDB' element={}/>
                <Route path='Learn-about-APIs' element={}/>
                <Route path='REST-apis' element={}/>
                <Route path='JSON' element={}/>
                <Route path='design-and-development-principles' element={}/>
                <Route path='solid' element={}/>
                <Route path='kiss' element={}/>
                <Route path='yagni' element={}/>
                <Route path='dry' element={}/>
                <Route path='web-servers' element={}/>
                <Route path='nginx' element={}/>
                <Route path='what-is-scaling' element={}/>
                <Route path='home' element={}/>
                <Route path='sign-up' element={}/>
                <Route path='*' element={<ErrorPage/>} />
            </Routes>

            {/* Here we will use a Footer element */}
        </Router>
       
    )

}

export default App