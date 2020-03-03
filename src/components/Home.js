import React, { Component } from 'react'
import GuideTile from './GuideTile'
import ScrollToTopBtn from "./ScrollToTop";

class Home extends Component {
    constructor() {
        super()
        this.state = {
            loading: true,
            guides: []
        }
    }



    componentDidMount() {
       fetch("https://lgapi-us.libapps.com/1.1/guides/?site_id=8488&key=0b8da796b00334ae3471f60e6a10e8c6&sort_by=name&status=1"
       ) 
       .then(result => result.json())
       .then(resultData => {
           this.setState ({
               loading: false,
               guides: resultData
           })
       }) 
          
    }

    render() {
        const guideTiles = this.state.loading ? "Loading..." : this.state.
        guides.map (
            (item, idx) => <GuideTile key ={idx} {...item} />
        )
        
        return (
            
            <div className="guides">
               
                <h2>Guides</h2>
            
                {guideTiles}
                
                <ScrollToTopBtn />
            </div>
        )
    }
}

export default Home