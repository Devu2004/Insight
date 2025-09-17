import React,{useState} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Dashboard.scss'


const Dashboard = () => {
  const [fileName, setFileName] = useState("")

  const handleFileChange = (e)=>{
    const file = e.target.files[0];
    if(file){
      setFileName(file.name)
    }
  }
  return (
    <>
    <div className='wrapper'>
    <Navbar/>
    <div className='mainScreenOfPage'>
      <div className="mainScreenContent">
      <h2>
        Hey there, <br />
        <span>AI That Builds Your Perfect Profile.</span>
      </h2>
      <div className="uploadResume">
        <label htmlFor="resumeInput" className='upload-resume'>
          <div className="left">
            <div className="plus">+</div>
            <div className="text">
              {fileName ? (
                <>
                                <p className="file-name">{fileName}</p>
                <p className="hint">Click to replace</p>
                </>
              ):(
                 <>
                <p className="title">Upload your resume</p>
                <p className="hint">PDF or DOCX (max 5 MB)</p>
              </>
              )}
            </div>
          </div>
           <div className="browse-btn">Browse</div>
        </label>
        <input
        type="file"
        id="resumeInput"
        accept=".pdf,.docx"
        onChange={handleFileChange}
        hidden
      />
      </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Dashboard