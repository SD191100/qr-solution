

const App = () => {
  return <div className="bg-[#D5E1EF] h-screen flex items-center justify-center " >
    <div className="flex flex-col gap-6 items-center bg-white px-5 py-5 pb-14 rounded-3xl max-w-md shadow-lg" >
      <img className=" h-96 rounded-xl" src="image-qr-code.png" alt="" />
      <div className="flex flex-col items-center gap-6" >
        <h1 className="text-text-dark max-w-96 font-bold font-sans text-3xl text-center text-nowrap" >Improve your front-end skills by building projects
        </h1>
        <p className="text-xl font-sans max-w-80 font-normal text-nowrap text-text-light text-center" >Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </p>
      </div>
    </div>
  </div>
}

export default App