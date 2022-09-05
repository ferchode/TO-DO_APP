import React from "react"
import ContentLoader from "react-content-loader"


const MyLoader = (props) => (
  <ContentLoader 
    speed={3}
    width={320}
    height={500}
    viewBox="0 0 320 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
    
    
  >
    <rect  
    x="23" 
    y="18" 
    rx="8" 
    ry="8" 
    width="275" 
    height="60" 
    margin="0 0 20 0"
    /> 
    <rect 
    x="23" 
    y="92" 
    rx="8" 
    ry="8" 
    width="275" 
    height="60" 
    /> 
    <rect 
    x="23" 
    y="165" 
    rx="8" 
    ry="8" 
    width="275" 
    height="60" 
    margin="0 0 20 0"
    />
  </ContentLoader>
)

export {MyLoader};