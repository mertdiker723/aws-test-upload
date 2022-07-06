import { useState } from "react";
import ReactS3Client from 'react-aws-s3-typescript'; // https://www.npmjs.com/package/react-aws-s3-typescript

export const s3Config = {
    bucketName: 'static-project-hosting',
    region: 'us-east-2',
    accessKeyId: 'AKIA2SVT2GZ7UEGFPZIP',
    secretAccessKey: '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',
}

// Toplu yükleme yok ? multiple
window.Buffer = window.Buffer || require("buffer").Buffer;  // https://stackoverflow.com/questions/69686231/react-s3-error-referenceerror-buffer-is-not-defined

const AwsS3Type = () => {
    const [selectedFile, setSelectedFile] = useState<File>({} as File);
    const [location, setlocation] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);


    const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedFile(e.currentTarget.files![0])
    }
    const uploadFile = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setLoading(true);
        const s3 = new ReactS3Client(s3Config);

        try {
            const res = await s3.uploadFile(selectedFile);

            setlocation(res.location);
            setLoading(false);
        } catch (exception) {
            console.log(exception);

            setLoading(false);
        }
    }
    return (
        <div>
            <input type="file" onChange={handleFileInput} />
            <button onClick={uploadFile}> Upload to S3</button>
            <br /><br />
            {loading && "loading"}
            <br />
            {
                location && <img src={location} alt="test" />
            }
        </div>
    )
}

export default AwsS3Type