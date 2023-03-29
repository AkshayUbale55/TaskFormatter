import './App.css';
import Buttons1 from './Content/Button1';
import Buttons2 from './Content/Button2';
import Buttons3 from './Content/Button3';
import Buttons4 from './Content/Button4';
import Buttons5 from './Content/Button5';
import Buttons6 from './Content/Button6';
import Buttons7 from './Content/Button7';
import Buttons8 from './Content/Button8';
import Buttons9 from './Content/Button9';
import Buttons10 from './Content/Button10';
import Buttons11 from './Content/Button11';
import Buttons12 from './Content/Button12';
import Buttons13 from './Content/Button13';
import Buttons14 from './Content/Button14';

function App() {



  return (
    <>

      <div className="App">
        <div className='text-center mt-2 font-semibold text-md p-0.5'>WD to QA Assigning Format Task Template</div>
        <div className="flex m-1 my-2 p-4 flex-col max-w-full justify-center items-center rounded bg-gray-500 shadow">
          <div className='flex flex-row justify-center space-x-2 m-1 p-1 items-center'>
            <Buttons1 IB="VEEVA IB" CR="VEEVA CR" Coversion="VEEVA to SFMC" name="VEEVA Email" />
            <Buttons2 IB="SFMC IB" CR="SFMC CR" Coversion="SFMC to VEEVA" name="SFMC Email" />
            <Buttons3 IB="Veeva IB" CR="Veeva CR" IB1="SFMC IB" CR1="SFMC CR" name="Assembler" />
          </div>
          <div className='flex flex-row justify-center space-x-2 p-1  items-center' >
            <Buttons4 IB="iPad IB" CR="iPad CR" name="iPad" />
            <Buttons5 IB1="Website IB" IB2="Website Update IB" CR="Website CR" siteValidation="Live site validation" name="Website" />
            <Buttons6 IB="Outlook IB" CR="Outlook CR" name="Outlook" />
          </div>
        </div>
        <div className='text-center mt-2 font-semibold text-md p-1'>Email Assign Task Template for CP/S3/PDF/Veeva/SFMC Uploads</div>
        <div className="flex m-1 my-2 p-4 flex-col max-w-full justify-center items-center rounded bg-gray-500 shadow min-h-full">
          <div className='flex flex-row justify-center space-x-2 m-1 p-1  items-center'>
            <Buttons7 CPtask="CP Assigning Task" name="Image Cropping" />
            <Buttons8 Uploadtask="S3 Image Upload" ReUploadtask="S3 Image Reupload"  name="S3Image Upload Veeva" />
            <Buttons9 Uploadtask="SFMC Image Upload" ReUploadtask="SFMC Image Reupload"  name="SFMC Image Upload" /> 
          </div>
          <div className='flex flex-row justify-center space-x-2 m-1 p-1 items-center'>
          <Buttons10 Uploadtask="PDF Upload"  name="PDF Upload Veeva" />
          <Buttons11 Uploadtask="Veeva Email IB Upload Task" ReUploadtask="Veeva IB/CR Reupload Task" name="Veeva Email IB Upload" />
          <Buttons12 Uploadtask="SFMC Email IB Upload Task" ReUploadtask="SFMC IB/CR Reupload Task" name="SFMC Email IB Upload" />  
          </div>
          <div className='flex flex-row justify-center space-x-2 m-1 p-1 items-center'>
          <Buttons13 VeevaToken="Veeva token" SfmcToken="SFMC token" MsdTubeLinks="MSD Tube Links"  CloudPageLinks="Cloud page Links" name="Tokens" />
          <Buttons14 Veevabuild="Veeva Build" Sfmcbuild="SFMC Build" PreDrtbuild="PreDRT Build"   name="Build Naming Format" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
