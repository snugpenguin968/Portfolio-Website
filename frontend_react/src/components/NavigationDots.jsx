import React from 'react'

const NavigationDots = ({active}) => {
  return (
    <div className="app__navigation">
      {['home', 'about', 'projects', 'misc.', 'contact'].map((item,index) => (
            
              <a href={`#${item}`} 
              key={item+index}
              
              className="app__navigation-dot"
              style={active===item?{backgroundColor:'var(--white-color)' }:{} }
              
              >
                
              </a>
            
      ))}
    </div>
  )
}

export default NavigationDots