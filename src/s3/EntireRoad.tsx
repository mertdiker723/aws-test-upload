import { useState, useRef, useEffect } from "react";
import AWS from 'aws-sdk'; // https://www.npmjs.com/package/aws-sdk

// https://javascript.plainenglish.io/how-to-upload-files-to-aws-s3-in-react-591e533d615e

const S3_BUCKET = 'static-project-hosting';
const REGION = 'us-east-2';

// https://plugins.krajee.com/file-folder-upload-demo

AWS.config.update({
    accessKeyId: 'AKIA2SVT2GZ7UEGFPZIP',
    secretAccessKey: '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',
    httpOptions: {
        timeout: 0,
        connectTimeout: 0
    }
})

const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET },
    region: REGION,
})
const EntireRoad = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [progress, setProgress] = useState(0);
    const [files, setFiles] = useState<FileList>({} as FileList);
    const [selectedFile, setSelectedFile] = useState<React.SetStateAction<File>>({} as File);

    useEffect(() => {
        if (inputRef.current !== null) {
            inputRef.current.setAttribute("webkitdirectory", "");
            inputRef.current.setAttribute("directory", "");
        }
    }, [inputRef])

    const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedFile(e.currentTarget.files![0]);
        setFiles(e.currentTarget.files!);
    }
    const uploadFile = async (file: React.SetStateAction<File>) => {

        console.log("files", files);
        
        for (const key in files) {
            const params = {
                ACL: 'public-read',
                Body: files[key],
                Bucket: S3_BUCKET,
                Key: files[key].webkitRelativePath
            };
            const x = myBucket.putObject(params).on('httpUploadProgress', (evt) => {
                setProgress(Math.round((evt.loaded / evt.total) * 100))
            })
            x.send((err) => {
                if (err) {
                    console.log(err)
                }
                else {
                    console.log("x", x.httpRequest);
                }
            })
        }
    }

    return (
        <div>
            <div>Native SDK File Upload Progress is {progress}%</div>
            <input ref={inputRef} type="file" onChange={handleFileInput} />
            <button onClick={() => uploadFile(selectedFile)}> Upload to S3</button>
        </div>
    )
}

export default EntireRoad