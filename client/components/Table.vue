<template>
  <div>
    <div>
      <input
       type="text" 
        v-model="newPerson.name">
      <input
       type="text" 
        v-model="newPerson.age">
      <button
        @click="addHandler"
    >
      add
    </button>
    </div>
    <div
      class="row" 
      v-for="person in dataList" 
      :key="person._id"
    >
      <div
        v-if="editing._id !== person._id"
      >
      <input
        type="text"
        :value="person.name"
        readonly
      >
      <input
        type="text"
        :value="person.age"
        readonly
      >
      </div>
      <div
        v-if="editing._id === person._id"
      >
        <input
        type="text"
        v-model="editing.name"
      >
      <input
        type="text"
        v-model="editing.age"
      >
      </div>
      <button 
        @click="deleteData(person._id)"
      >
        delete
      </button>
      <button 
        v-if="editing._id !== person._id" 
        @click="editHandler(person)"
      >
        edit
      </button>
      <div
        v-if="editing._id === person._id"
      >
        <button 
          @click="saveHandler(person)"
        >
          save
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      editing: {
        name: '',
        age: null,
        _id: ''
      },
      newPerson: {
        name: '',
        age: null
      }
    }
  },
  computed: {
    ...mapState({
      dataList: state => state.dataList
    })
  },
  methods: {
    ...mapActions([
      'getData',
      'postData',
      'deleteData',
      'putData'
    ]),
    addHandler() {
      this.postData({
        name: this.newPerson.name,
        age: this.newPerson.age
      })
      this.newPerson.name = ''
      this.newPerson.age = null
    },
    editHandler(data) {
      if (this.editing._id === '') {
          this.editing.name = data.name
          this.editing.age = data.age
          this.editing._id = data._id
      }
    },
    saveHandler(data) {
      this.putData({
        _id: this.editing._id,
        name: this.editing.name,
        age: this.editing.age
      })
      this.editing._id = ''
    },
  },
  async created() {
    this.getData()
  }
}
</script>

<style>
.NuxtLogo {
  animation: 1s appear;
  margin: auto;
}
.row {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #000;
  padding: .5rem;
}
@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
