// @flow
import RNImagePicker from 'react-native-image-picker';
import {
  API_GET_IMAGE_PATH,
  ERROR_SOMETHING_WENT_WRONG,
} from '../config/WebService';
import SimpleToast from 'react-native-simple-toast';
import utils from '../utils';

const OPTIONS = {
  title: 'Select Image',
  takePhotoButtonTitle: 'Launch Camera',
  chooseFromLibraryButtonTitle: 'Choose from Library',
  cancelButtonTitle: 'cancel',
  quality: 0.1,
  allowsEditing: true,
};

class MediaPicker {
  showImagePicker = (cb, token, loading) => {
    console.log(token, 'token in mediapicker');
    RNImagePicker.showImagePicker(OPTIONS, response => {
      console.log('Response = ', response);
      try {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else {
          const source = { uri: response.uri };
          if (cb) {
            if (loading) {
              loading(true);
            }
            let extension =
              response.type == 'image/jpeg' ? 'image/jpg' : 'image/png';
            let name = () => {
              let title = response.fileName
                ? response.fileName.toLowerCase()
                : 'image.jpg';
              console.log(title, '1');
              if (title.includes('heic')) {
                title = title.replace('heic', 'jpg');
                console.log(title, '2');
              }
              console.log(title, '3');
              return title;
            };
            let data = new FormData();
            data.append('File_Multipart', {
              uri: response.uri,
              name: name(),
              type: utils.isPlatformAndroid() ? response.type : extension,
            });

            const config = {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': utils.isPlatformAndroid()
                  ? 'multipart/form-data'
                  : 'multipart/form-data; boundary=6ff46e0b6b5148d984f148b6542e5a5d',
                // 'Content-Language': NativeModules,
                Authorization: `Bearer ${token}`,
              },
              body: data,
            };
            return fetch(API_GET_IMAGE_PATH, config).then(response => {
              let data = response.json();
              data
                .then(response => {
                  console.log(response, 'abc');
                  if (response.status) {
                    cb(response.response);
                    if (loading) {
                      loading(false);
                    }
                  } else {
                    SimpleToast.show(response.message);
                    if (loading) {
                      loading(false);
                    }
                  }
                })
                .catch(err => {
                  console.log('image api', err);
                  if (loading) {
                    loading(false);
                  }

                  SimpleToast.show(err);
                });
            });
          }
        }
      } catch (err) {
        console.log('image trycatch ', err);
        if (loading) {
          loading(false);
        }

        SimpleToast.show('failed');
      }
    });
  };
}

export default new MediaPicker();
