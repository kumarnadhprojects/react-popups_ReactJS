import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import './index.css'

// const ReactPopUp = () => (
//   <div className="popup-container">
//     <Popup
//       modal
//       trigger={
//         <button type="button" className="trigger-button">
//           Trigger
//         </button>
//       }
//     >
//       <p>React is a popular and widely used programming language</p>
//     </Popup>
//   </div>
//  )
//  export default ReactPopUp

// const ReactPopUp = () => (
//   <div className="popup-container">
//     <Popup
//       modal
//       trigger={
//         <button type="button" className="trigger-button">
//           Trigger
//         </button>
//       }
//     >
//       {close => (
//         <>
//           <div>
//             <p>React is a popular and widely used programming language</p>
//           </div>
//           <button
//             type="button"
//             className="trigger-button"
//             onClick={() => close()}
//           >
//             Close
//           </button>
//         </>
//       )}
//     </Popup>
//   </div>
//  )
//  export default ReactPopUp

// const ReactPopUp = () => (
//   <div className="popup-container">
//     <Popup
//       trigger={
//         <button type="button" className="trigger-button">
//           Trigger
//         </button>
//       }
//       position="bottom left"
//     >
//       <p>React is a popular and widely used programming language</p>
//     </Popup>
//   </div>
//  )
//  export default ReactPopUp

// const overlayStyles = {
//   backgroundColor: '#ffff',
//  }
//  const ReactPopUp = () => (
//   <div className="popup-container">
//     <Popup
//       modal
//       trigger={
//         <button type="button" className="trigger-button">
//           Trigger
//         </button>
//       }
//       overlayStyle={overlayStyles}
//     >
//       <p>React is a popular and widely used programming language</p>
//     </Popup>
//   </div>
//  )
//  export default ReactPopUp

const overlayStyles = {
  backgroundColor: '#ffff',
 }
 const ReactPopUp = () => (
  <div className="popup-container">
    <Popup
      modal
      trigger={
        <button type="button" className="trigger-button">
          Trigger
        </button>
      }
      overlayStyle={overlayStyles}
    >
      <p>React is a popular and widely used programming language</p>
    </Popup>
  </div>
 )
 export default ReactPopUp