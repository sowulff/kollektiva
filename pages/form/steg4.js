import AppContext from "../../components/AppContext";
import { useContext, useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar.js";
import FormWrapper from "../../components/FormWrapper.js";
import UploadICon from "../../assets/steg4/upload_arrow.svg";
import styles from "../../styles/form/steg4.module.scss";
import Image from "next/image";

export default function Images() {
  const state = useContext(AppContext);
  let { formData } = state.state;

  const [image, setImage] = useState(null);
  const [uploadedImages, setUploadedImages] = useState({ images: [] });

  useEffect(() => {
    const [file] = images.files;
    if (file) {
      setUploadedImages({
        images: [...uploadedImages.images, file],
      });
    }
    if (uploadedImages.images.length > 9) {
      document.getElementById("seemore").style.display = "flex";
    }
    console.log(uploadedImages);
    state.setFormData({ ...formData, ...uploadedImages });
  }, [image, state, formData]);
  return (
    <div className={styles.container}>
      <Sidebar mainStep={3} currentSubStep={3} />
      <FormWrapper
        title="Ladda upp dina bilder"
        description="Bifoga dina bilder och planritning, för att bättre visa hur din bostad ser ut"
        next="steg5"
        prev="steg3"
      >
        <form className={styles.main}>
          <label htmlFor="images" className={styles.inputLabel}>
            <div>
              <Image
                src={UploadICon.src}
                width="50"
                height="50"
                alt="upload icon"
                className={styles.img}
              />
              <p>Dra in dina bilder här</p>
              <p>Välj från enhet</p>
            </div>
          </label>
          <input id="images" type="file" onChange={(x) => setImage(x)} />
          {uploadedImages.images.length > 0 ? (
            <div id="previews" className={styles.previews}>
              {uploadedImages.images.map(
                (file, index) =>
                  index < 10 && <UploadedImage file={file} key={index} />
              )}
              <button id="seemore" className={styles.more}>
                +{uploadedImages.images.length - 10}
              </button>
            </div>
          ) : (
            ""
          )}
        </form>
      </FormWrapper>
    </div>
  );
}

const UploadedImage = ({ file }) => {
  const image = URL.createObjectURL(file);
  return (
    <div className={styles.imageWrapper}>
      <Image src={image} alt={file.name} width="500" height="500" />
      <p>{file.name}</p>
      <button>del</button>
    </div>
  );
};
