"use client";

import Image from "next/image";
import styles from "./page.module.css";
import {useState} from "react";
import dynamic from "next/dynamic";
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), {ssr: false})

const Write = () => {
  const [open, setOpen] = useState(false);
  const [_document, setDocument] = useState<any>(null);

  // if (status === 'loading') {
  //   return <div className={styles.loading}>Loading...</div>
  // }

  // if (status === 'authenticated') {
  //   router.push('/')
  // }

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Title"
        className={styles.input}
      />
      <select className={styles.select}>
        <option value="style">style</option>
        <option value="fashion">fashion</option>
        <option value="food">food</option>
        <option value="culture">culture</option>
        <option value="travel">travel</option>
        <option value="coding">coding</option>
      </select>
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src="/plus.png" alt="" width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <input
              type="file"
              id="image"
              style={{display: "none"}}
            />
            <button className={styles.addButton}>
              <label htmlFor="image">
                <Image src="/image.png" alt="" width={16} height={16} />
              </label>
            </button>
            <button className={styles.addButton}>
              <Image src="/external.png" alt="" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="/video.png" alt="" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={''}
          placeholder="Tell your story..."
        />
      </div>
      <button className={styles.publish}>
        Publish
      </button>
    </div>
  );
};

export default Write;