import React from 'react'

export interface FileListProps {
  files: File[],
  limit?: number
}

export const FileList = React.memo(
  (props: any) => (
    <ul>
      {(props?.limit ? (props?.files?.length === props?.limit) : props?.files?.length) && 
        <>
            {props.files.map((file: File) => (
                <li key={`${file.name}_${file.lastModified}`}>
                <span>{file.name}</span>{' '}
                <span>({Math.round(file.size / 1000)}kb)</span>
                </li>
            ))}
        </>
      }
    
    </ul>
  )
)

FileList.displayName = 'FileList'