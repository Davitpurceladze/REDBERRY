<template>
  <span class="personalTitle">პირადი ინფო</span>
  <span class="pageNumber">1/3</span>
  <router-link to="/home">
    <img src="../assets/Vector.jpg" class="homeButton" @click="clearData" />
  </router-link>
  <the-line></the-line>
  <form>
    <div
      class="user-name"
      :class="[
        { invalid: validation.userNameVailidity === 'invalid' },
        { valid: validation.userNameVailidity === 'valid' },
      ]"
    >
      <label for="user-name">სახელი</label>
      <input
        placeholder=" ანზორ"
        type="text"
        id="user-name"
        name="user-name"
        v-model.lazy="resume.userName"
        @blur="validateUserName"
      />
      <div>მინიმუმ 2 ასო, ქართული ასოები</div>
      <img
        v-if="validation.userNameVailidity === 'invalid'"
        src="../assets/invalidLogo.jpg"
      />
    </div>
    <div
      class="surname"
      :class="[
        { invalid: validation.surnameValidity === 'invalid' },
        { valid: validation.surnameValidity === 'valid' },
      ]"
    >
      <label for="surname">გვარი</label>
      <input
        type="text"
        placeholder=" მუმლაძე"
        id="surname"
        name="surname"
        v-model.lazy="resume.surname"
        @blur="validateSurname"
      />
      <div>მინიმუმ 2 ასო, ქართული ასოები</div>
      <img
        v-if="validation.surnameValidity === 'invalid'"
        src="../assets/invalidLogo.jpg"
      />
    </div>

    <div class="uploadFile">
      <input
        type="file"
        class="hidden"
        ref="fileUploadInput"
        @change="pickFile"
      />
      <!-- <img :src="imagePreview" /> -->
      <label for="input">პირადი ფოტოს ატვირთვა</label>
      <button type="button" @click="onFileUpload($event)">
        <span>ატვირთვა</span>
      </button>
    </div>

    <div class="aboutMe">
      <label for="">ჩემ შესახებ (არასავალდებულო)</label>
      <input
        type="textarea"
        placeholder=" ზოგადი ინფო შენ შესახებ"
        id="aboutme"
        name="aboutme"
        v-model.lazy="resume.aboutme"
        @blur="validateAboutMe"
      />
    </div>
    <div
      class="email"
      :class="[
        { valid: validation.emailValidity === 'valid' },
        { invalid: validation.emailValidity === 'invalid' },
      ]"
    >
      <label for="email">ელ.ფოსტა</label>
      <input
        type="email"
        placeholder=" anzorr666@redberry.ge"
        id="email"
        name="email"
        v-model.lazy="resume.email"
        @blur="validateEmail"
      />
      <div>უნდა მთავრდებოდეს @redberry.ge-თი</div>
      <img
        v-if="validation.emailValidity === 'invalid'"
        src="../assets/invalidLogo.jpg"
      />
    </div>
    <div
      class="phoneNumber"
      :class="[
        { valid: validation.phoneNumberValidity === 'valid' },
        { invalid: validation.phoneNumberValidity === 'invalid' },
      ]"
    >
      <label for="phoneNumer">მობილურის ნომერი</label>
      <input
        type="text"
        placeholder=" +995 551 12 34 56"
        id="phoneNumber"
        name="phoneNumber"
        v-model.lazy="resume.phoneNumber"
        @blur="validatePhoneNumber"
      />
      <div>უნდა აკმაყოფილედეს ქართული მობილურის ნომრის ფორმატს</div>
      <img
        v-if="validation.phoneNumberValidity === 'invalid'"
        src="../assets/invalidLogo.jpg"
      />
    </div>
    <router-link to="/pageExperience">
      <button type="button" class="nextToExperience">
        <span>შემდეგი</span>
      </button>
    </router-link>
  </form>

  <the-resume
    :name="resume.userName"
    :surname="resume.surname"
    :email="resume.email"
    :phoneNumber="resume.phoneNumber"
    :aboutme="resume.aboutme"
  ></the-resume>
</template>

<script>
import TheLine from "../components/TheLine.vue";

export default {
  components: {
    TheLine,
  },
  data() {
    return {
      resume: {
        userName: localStorage.userName,
        surname: localStorage.surname,
        aboutme: localStorage.aboutme,
        email: localStorage.email,
        phoneNumber: localStorage.phoneNumber,
        position: localStorage.position,
        employer: localStorage.employer,
        imageUrl: this.imagePreview,
      },

      validation: {
        userNameVailidity: "pending",
        surnameValidity: "pending",
        emailValidity: "pending",
        phoneNumberValidity: "pending",
        positionValidity: "pending",
        employerValidity: "pending",
      },

      imagePreview: null,
    };
  },
  methods: {
    clearData() {
      localStorage.clear();
    },
    onFileUpload() {
      this.$refs.fileUploadInput.click();
    },
    pickFile() {
      let input = this.$refs.fileUploadInput;
      let file = input.files;
      if (file && file[0]) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.imagePreview = e.target.result;
        };
        reader.readAsDataURL(file[0]);

        this.$emit("input", file[0]);
      }
    },
    validateAboutMe() {
      if (this.resume.aboutme) {
        localStorage.setItem("aboutme", this.resume.aboutme);
      }
    },
    validateUserName() {
      if (this.resume.userName?.match(/^[\u10A0-\u10FF]{2,}$/)) {
        this.validation.userNameVailidity = "valid";
        localStorage.setItem("userName", this.resume.userName);
      } else {
        this.validation.userNameVailidity = "invalid";
      }
    },
    validateSurname() {
      if (this.resume.surname.match(/^[\u10A0-\u10FF]{2,}$/)) {
        this.validation.surnameValidity = "valid";
        localStorage.setItem("surname", this.resume.surname);
      } else {
        this.validation.surnameValidity = "invalid";
      }
    },
    validateEmail() {
      if (this.resume.email.match(/^[a-zA-Z0-9.]+@redberry.ge$/)) {
        this.validation.emailValidity = "valid";
        localStorage.setItem("email", this.resume.email);
      } else {
        this.validation.emailValidity = "invalid";
      }
    },
    validatePhoneNumber() {
      if (
        this.resume.phoneNumber.match(
          /^[+][9][9][5][0-9]{3}[0-9]{2}[0-9]{2}[0-9]{2}$/
        )
      ) {
        this.validation.phoneNumberValidity = "valid";
        localStorage.setItem("phoneNumber", this.resume.phoneNumber);
      } else {
        this.validation.phoneNumberValidity = "invalid";
      }
    },
  },
};
</script>

<style scoped>
@import "../css/personal/phoneNumber.css";
@import "../css/personal/email.css";
@import "../css/personal/aboutMe.css";
@import "../css/personal/userName.css";
@import "../css/personal/surname.css";
@import "../css/personal/uploadFile.css";
@import "../css/personal/nextToExperience.css";
@import "../css/personal/personalTitle.css";
@import "../css/personal/pageNumber.css";
@import "../css/personal/homeButton.css";

.phoneNumber.valid input {
  border-color: #98e37e;
  background: url("../assets/validLogo.jpg") no-repeat scroll 760.75px 11.75px;
}

.phoneNumber.invalid input {
  border-color: #ef5050;
}
.phoneNumber img {
  position: absolute;
  margin-left: 810px;
  margin-top: 43px;
}
.email img {
  position: absolute;
  margin-left: 810px;
  margin-top: 43px;
}
.email.valid input {
  border-color: #98e37e;
  background: url("../assets/validLogo.jpg") no-repeat scroll 760.75px 11.75px;
}
.email.invalid input {
  border-color: #ef5050;
}
.surname img {
  position: absolute;
  margin-left: 379px;
  margin-top: 43px;
}
.user-name img {
  position: absolute;
  margin-left: 379px;
  margin-top: 43px;
}
.surname.invalid input {
  border-color: #ef5050;
}
.surname.valid input {
  border-color: #98e37e;
  background: url("../assets/validLogo.jpg") no-repeat scroll 339.75px 11.75px;
}
.user-name.invalid input {
  border-color: #ef5050;
}
.user-name.valid input {
  border-color: #98e37e;
  background: url("../assets/validLogo.jpg") no-repeat scroll 339.75px 11.75px;
}

.hidden {
  display: none;
}

[placeholder=" მუმლაძე"],
[placeholder=" ანზორ"],
[placeholder=" ზოგადი ინფო შენ შესახებ"],
[placeholder=" anzorr666@redberry.ge"],
[placeholder=" +995 551 12 34 56"] {
  font-family: "HelveticaNeue";
  font-size: 16px;
  font-weight: 400;
  left: 16px;
  color: rgba(0, 0, 0, 0.6);
}
</style>
