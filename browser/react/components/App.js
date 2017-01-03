import React, {Component} from 'react';
import NavbarContainer from '../containers/NavbarContainer'
import LeftSidebarContainer from '../containers/LeftSidebarContainer'
import RightSidebarContainer from '../containers/RightSidebarContainer'
import LoginContainer from '../containers/LoginContainer'
import BioContainer from '../containers/BioContainer'
import Footer from '../components/Footer'
import Home from '../components/Home'

const App = (props) => {
  return (
    <div>
      <NavbarContainer />
      { props.user && Object.keys(props.user).length ? (
        <div>
          <div className="col-xs-2 sidebar" style={{marginTop: 50}}>
            <LeftSidebarContainer />
            <RightSidebarContainer />
          </div>
          <div className="col-xs-8" style={{marginTop: 50}}>
            {
              props.children && React.cloneElement(props.children, props)
            }

            {props.bios.map(bio => {
              return <div key={bio.userId}>
                <BioContainer
                  id={bio.userId}
                  firstname={bio.firstname}
                  lastname={bio.lastname}
                  self={bio.self} />
              </div>
            })}
          </div>
        </div>
      ) : (
        <div className="col-xs-12" style={{marginTop: 50}}>
          {
            props.children && React.cloneElement(props.children, props)
          }

          {props.bios.map(bio => {
            return <div key={bio.id}>
              <BioContainer
                id={bio.id}
                firstname={bio.firstname}
                lastname={bio.lastname}
                self={bio.self} />
            </div>
          })}
        </div>
      )}

      <Footer />
    </div>

  );
}

export default App;
