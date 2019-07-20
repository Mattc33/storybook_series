import React from 'react'

const Button = (props) => {
   const defaultStyles = {
      cursor: 'pointer',
      outline: 'none',
      height: '2rem',
      width: '6rem',
      color: 'white',
      fontWeight: 'bold'
   }

   let backgroundColor = ''

   switch(props.type) {
      case 'primary':
         backgroundColor = '#0069D9'
         break
      case 'info':
         backgroundColor = '#17A2B8'
         break
      case 'warning':
         backgroundColor = '#FFC107'
         break
      case 'success':
         backgroundColor = '#28A745'
         break
      case 'danger':
         backgroundColor = '#DC3545'
         break
      default:
         backgroundColor = 'darkgray'
         break
   }

   return <button 
      {...props}       // pass in all props from parent like the click action from stories
      style={{
         ...defaultStyles,
         backgroundColor: backgroundColor
      }}
   >{props.children}</button>
}

export default Button