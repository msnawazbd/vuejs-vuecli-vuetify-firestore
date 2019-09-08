<template>
  <div class="about">
    <h1 class="my-6">Dashboard</h1>

    <v-container class="grey lighten-5" fluid="">

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

      <v-card class="pa-2" outlined tile v-for="project in projects" :key="project.title">
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
  export default {
    data(){
      return {
        projects: [
          {title: 'Design a new website', person: 'The Net Ninja', due: '1st jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur dignissimos dolore ducimus neque, quibusdam rem voluptas! Amet consectetur dolor dolorem esse exercitationem explicabo fugit id illo labore laborum nam nostrum obcaecati officia optio, placeat possimus quaerat quo quos sapiente sed sequi temporibus veniam. Accusantium culpa necessitatibus nobis tenetur veritatis.'},
          {title: 'Code up the home page', person: 'Nawaz', due: '2nd jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur dignissimos dolore ducimus neque, quibusdam rem voluptas! Amet consectetur dolor dolorem esse exercitationem explicabo fugit id illo labore laborum nam nostrum obcaecati officia optio, placeat possimus quaerat quo quos sapiente sed sequi temporibus veniam. Accusantium culpa necessitatibus nobis tenetur veritatis.'},
          {title: 'Design video thumbnails', person: 'Maruf', due: '3rd jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur dignissimos dolore ducimus neque, quibusdam rem voluptas! Amet consectetur dolor dolorem esse exercitationem explicabo fugit id illo labore laborum nam nostrum obcaecati officia optio, placeat possimus quaerat quo quos sapiente sed sequi temporibus veniam. Accusantium culpa necessitatibus nobis tenetur veritatis.'},
          {title: 'Create a community forum', person: 'Jayanta', due: '4th jan 2019', status: 'overdue', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur dignissimos dolore ducimus neque, quibusdam rem voluptas! Amet consectetur dolor dolorem esse exercitationem explicabo fugit id illo labore laborum nam nostrum obcaecati officia optio, placeat possimus quaerat quo quos sapiente sed sequi temporibus veniam. Accusantium culpa necessitatibus nobis tenetur veritatis.'},
        ]
      }
    },
    methods: {
      sortBY(prop){
        this.projects.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
      }
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