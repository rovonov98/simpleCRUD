<template>
  <div>
    <button 
      @click="getData"
    >
      get
    </button>
    <button
      @click="postData"
    >
      add
    </button>
    <div
      class="row" 
      v-for="data in dataList" 
      :key="data._id"
    >
      <span>Name:{{ data.name }}</span>
      <span>Age:{{ data.age }}</span>
      <button 
        @click="deleteData(data._id)"
      >
        delete
      </button>
      <button 
        v-if="editing !== data._id" 
        @click="editHandler(data._id)"
      >
        edit
      </button>
      <div
        v-if="editing === data._id"
      >
        <button 
          @click="saveHandler(data)"
        >
          save
        </button>
        <button 
          @click="cancelHandler"
        >
          cancel
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
      editing: ''
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
    // addHandler() {

    // },
    editHandler(_id) {
      if (this.editing === '') {
          this.editing = _id
      }
    },
    saveHandler(data) {
      this.putData(data)
    },
    cancelHandler() {
      this.editing = ''
    }
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
