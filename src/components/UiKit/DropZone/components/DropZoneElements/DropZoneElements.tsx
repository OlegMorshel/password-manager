import Picture from '@src/components/UiKit/Picture/Picture'
import classNames from 'classnames/bind'
import React from 'react'
import { DropzoneInputProps, DropzoneRootProps } from 'react-dropzone'
import { TrashSVG } from '@src/icons/Icons'
import Input from '../../../Input/Input'
import { ApiFileType } from '../../DropZone'
import styles from './DropZoneElements.module.scss'

const cnb = classNames.bind(styles)

interface Props {
  files: ApiFileType[]
  getRootProps: <T extends DropzoneRootProps>(props?: T | undefined) => T
  getInputProps: <T extends DropzoneInputProps>(props?: T | undefined) => T
  title: string
  setFiles: (value: ApiFileType[]) => void
  noPreview?: boolean
}

const DropZoneElements: React.FC<Props> = ({ files, getRootProps, getInputProps, title, setFiles, noPreview }): JSX.Element => {
  return (
    <>
      {files?.map((item, index) => (
        <div className={cnb('filledBlock')} key={index}>
          <div {...getRootProps()} className={cnb('inputWrapper')}>
            <input {...getInputProps()} />
            <Input setValue={() => null} title={title} value={item.absolute_path ? item.absolute_path : ''} isDisabled />
          </div>
          <div className={cnb('imagePreview')} onClick={() => setFiles(files.filter((el, i) => i !== index))}>
            <TrashSVG />
            {/* {noPreview ? (
              <Picture src={'https://via.placeholder.com/56x56'} alt="Фото" className={cnb('image')} />
            ) : ( */}
            <Picture src={item.absolute_path} alt="Фото" className={cnb('image')} />
            {/* )} */}
          </div>
        </div>
      ))}
    </>
  )
}

export default DropZoneElements
