<template>
  <div id="page" class="d-flex flex-column justify-content-center h-100">
    <h1>Comentários</h1>
    <hr />
    <CommentForm v-on:add-todo="addComment"></CommentForm>
    <div class="list-group">
      <p v-if="comments.length <= 0">Sem comentários...</p>
      <div
        v-else
        class="list-group-item"
        v-for="(comment, index) in allComments"
        v-bind:key="index"
      >
        <span class="comment__author"
          >Autor: <strong>{{ comment.name }}</strong></span
        >
        <p>{{ comment.message }}</p>
        <div>
          <button title="Excluir" v-on:click="removeComment(index)">Excluir</button>
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>

<script lang="ts">
import type Comment from '@/models/Comment'
import CommentForm from '../components/CommentForm.vue'

export default {
  components: {
    CommentForm
  },
  data() {
    return {
      comments: [] as Comment[]
    }
  },
  methods: {
    addComment(comment: Comment) {
      this.comments.push(comment)
    },
    removeComment(index: number) {
      this.comments.splice(index, 1)
    }
  },
  computed: {
    allComments() {
      return this.comments.map((comment) => ({
        ...comment,
        name: comment.name.trim() === '' ? 'Anônimo' : comment.name
      }))
    }
  },
  watch: {
    comments(val) {
      console.log('val', val)
    }
  }
}
</script>
