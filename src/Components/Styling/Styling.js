import React from 'react'
import './styles.css'
import counterStyle from './counter.module.css'

const Styling = () => {
    // inline
    // internal 
    // external
    // module

    const internalStyle = {
        divStyle:{
            marginTop:"20px",
            backgroundColor:'lightblue'
        },
        headerStyle:{

        }
    }

  return (
    <center>
        <h2>Styling</h2>
        <p style={{backgroundColor:"lightGreen", color:'red'}}>This is Inline Stylings</p>
        <div style={internalStyle.divStyle}>This is Internal Styling</div>
        <section className='sectionStyle'>This is External Styles</section>
        <h4 className={counterStyle.moduleStyle}>This is Module Stylings</h4>
    </center>
  )
}

export default Styling