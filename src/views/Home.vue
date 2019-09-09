<template>
  <div class="about">
    <div class="text-center ma-2">
      <v-snackbar
              :timeout="4000"
              top
              v-model="snackbar"
      >
        {{ text }}
        <v-btn
                color="pink"
                text
                @click="snackbar = false"
        >
          Close
        </v-btn>
      </v-snackbar>
    </div>
    <h1 class="my-6">Dashboard</h1>

    <v-container class="grey lighten-5" fluid="">


      <div class="text-center">
        <v-dialog v-model="dialog" width="500">
          <template v-slot:activator="{ on }">
            <v-btn color="red lighten-2" dark v-on="on">
              Click Me
            </v-btn>
          </template>

          <v-card>
            <v-card-title class="headline grey lighten-2" primary-title>
              Privacy Policy
            </v-card-title>

            <v-card-text>
              <v-form v-model="valid" ref="form">
              <v-text-field
                      v-model="title"
                      label="Title"
                      :rules="titleRules"
                      required
              ></v-text-field>
              <v-text-field
                      v-model="content"
                      label="Content"
                      :rules="contentRules"
                      required
              ></v-text-field>
                <v-btn color="primary lighten-2" :loading="loading" text @click="submit">
                  Submit
                </v-btn>
              </v-form>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <div class="flex-grow-1"></div>
              <v-btn color="primary" text @click="dialog = false">
                I accept
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>



      <div class="text-left mb-4">
        <v-chip class="ma-2" label text-color="grey" @click="sortBY('title')">
          <v-icon left>mdi-folder</v-icon>
          by project name
        </v-chip>

        <v-chip class="ma-2" label text-color="grey" @click="sortBY('person')">
          <v-icon left>mdi-account</v-icon>
          by person
        </v-chip>

      </div>

      <v-card class="pa-2" outlined tile v-for="project in projects" :key="project.id">
        <v-row :class="`project ${project.status}`">
          <v-col cols="6" sm="3">
            <div class="caption grey--text">Project Title</div>
            <div>{{ project.title }}</div>
          </v-col>
          <v-col cols="2" sm="3" class="mb-2">
            <div class="caption grey--text"> Person </div>
            <div>{{ project.person}}</div>
          </v-col>
          <v-col cols="2" sm="3" class="mb-2">
            <div class="caption grey--text">Due by</div>
            <div>{{ project.due }}</div>
          </v-col>
          <v-col cols="2" sm="3" class="mb-2">
            <div><v-chip :class="`${project.status} small white--text caption my-2`">{{ project.status }}</v-chip></div>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
  import db from '@/fb'

  export default {
    data(){
      return {
        valid: false,
        dialog: false,
        title: '',
        content: '',
        loading: false,
        snackbar: false,
        text: 'Hello, I\'m a snackbar',
        titleRules: [
          v => !!v || 'Title is required',
          v => v.length <= 30 || 'Title must be less than 30 characters',
        ],
        contentRules: [
          v => !!v || 'Content is required',
          v => v.length <= 30 || 'Content must be less than 30 characters',
        ],
        projects: []
      }
    },
    methods: {
      sortBY(prop){
        this.projects.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
      },
      submit(){
        if (this.$refs.form.validate()) {
          this.loading = true
          const project = {
            title: this.title,
            content: this.content,
            due: '9/9/2019',
            person: 'Maruf Hasan',
            status: 'overdue'
          }

          db.collection('projects').add(project)
                  .then(() => {
                    this.loading = false
                    this.dialog = false
                    this.snackbar = true
                    this.$emit('projectAdded')
                    console.log('added to db')
                  })
                  .catch(errors => console.log(errors))
        }
      }
    },
    created() {
      db.collection('projects').onSnapshot(res => {
        const changes = res.docChanges()

        changes.forEach(change => {
          if(change.type === 'added'){
            this.projects.push({
              ...change.doc.data(),
              id: change.doc.id
            })
          }
        })
      })
    }
  }
</script>

<style>
  .project.complete{
    border-left: 4px solid #3cd1c2;
    margin-left: 14px;
  }
  .project.ongoing{
    border-left: 4px solid orange;
    margin-left: 14px;
  }
  .project.overdue{
    border-left: 4px solid tomato;
    margin-left: 14px;
  }
  .v-chip.complete{
    background-color: #3cd1c2 !important;
  }
  .v-chip.ongoing{
    background-color: orange !important;
  }
  .v-chip.overdue{
    background-color: tomato !important;
  }
</style>