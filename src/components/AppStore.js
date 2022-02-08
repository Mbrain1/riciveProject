const AppStore = ({type}) => {
  return (<div className="flex space-x-3">
              {type == 'lg' ? 
              <>
               <img src="/assets/images/app-store/googleBig.png"  className="h-10 md:h-auto" />
               <img src="/assets/images/app-store/appleBig.png" className="h-10 md:h-auto"  />
               </> : 

               <>
               <img src="/assets/images/app-store/google.png"  />
               <img src="/assets/images/app-store/apple.png"  />
               </> }
            </div>
  )
}

export default AppStore;



