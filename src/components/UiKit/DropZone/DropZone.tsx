import classNames from 'classnames/bind'
import React, { memo, useCallback, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
// import useUploadFile from "src/hooks/mutation/useUploadFile";
import { ClipSvg } from '@src/icons/Icons'
// import { createNotification } from "src/providers/NotificationProvider";
import Loader from '../Loader/Loader'
import Typography from '../Typography/Typography'
import DropZoneElements from './components/DropZoneElements/DropZoneElements'
import styles from './DropZone.module.scss'

const cnb = classNames.bind(styles)

export interface FileType {
  path: string
  lastModified: number
  lastModifiedDate: Date
  name: string
  size: number
  type: string
  webkitRelativePath: string
}

export interface ApiFileType {
  absolute_path: string
  id: number
  name?: string
  relative_path?: string
}
export interface Props {
  wrapperClassName?: string
  innerClassName?: string
  isVisibleSize?: boolean
  maxPics?: number
  minPics?: number
  title?: string
  subtitle?: string
  multiple?: boolean
  maxFiles?: number
  files: ApiFileType[]
  setFiles: (value: ApiFileType[]) => void
  noPreview?: boolean
}

const DropZone: React.FC<Props> = memo(
  ({
    wrapperClassName,
    innerClassName,
    files,
    setFiles,
    maxFiles = 3,
    multiple = false,
    title = '',
    subtitle = 'Перетащите файл сюда или выберите на компьютере',
    isVisibleSize = false,
    minPics,
    maxPics,
    noPreview = false,
  }) => {
    // const { mutate, isLoading, isError } = useUploadFile()
    // useEffect(() => {
    //   // if (isError) createNotification("error", "Слишком большой вес файла!");
    //   if (isError) console.log('error', isError)
    // }, [isError])

    const onDrop = useCallback(
      //@ts-ignore-this-line
      acceptedFiles => {
        console.log('acceptedFiles ', files)
        const arr = [...files, ...acceptedFiles]
        // mutate({ file: acceptedFiles[0] }, { onSuccess: data => setFiles([data.data.data]) })

        if (arr.length > maxFiles) return setFiles(acceptedFiles)
        return setFiles(arr)
      },
      [files, maxFiles, setFiles]
    )
    const { getRootProps, getInputProps } = useDropzone({
      onDrop,
      maxFiles: 1,
      accept: {
        'image/*': ['.jpeg', '.png'],
      },
    })
    return (
      <>
        {files.length < maxFiles ? (
          <>
            {/* {true ? (
              <div className={cnb('wrapper')}>
                <Loader small className={cnb('loader')} />
              </div> */}

            <div {...getRootProps()} className={cnb('wrapper', wrapperClassName)}>
              <input {...getInputProps()} className={innerClassName} />
              <Typography tag="p4" className={cnb('text')}>
                {subtitle}
              </Typography>
              <div className={cnb('lowerText')}>
                <ClipSvg />
                <Typography tag="p3" className={cnb('titleText')}>
                  {title}
                </Typography>
              </div>
            </div>

            {isVisibleSize && (
              <div className={cnb('mainImageSizeText')}>
                <Typography tag="p4">{`Минимальный размер — ${maxPics} x ${minPics} пикс.`}</Typography>
              </div>
            )}
            <DropZoneElements
              getRootProps={getRootProps}
              getInputProps={getInputProps}
              title={title}
              files={files}
              setFiles={setFiles}
              noPreview={noPreview}
            />
          </>
        ) : (
          <DropZoneElements
            getRootProps={getRootProps}
            getInputProps={getInputProps}
            title={title}
            files={files}
            setFiles={setFiles}
            noPreview={noPreview}
          />
        )}
      </>
    )
  }
)
export default DropZone
