<template>
  <div>
    <!-- <button @click="saveIdeas">Save evaluation</button> -->
    <!-- Component to export JSON file -->
    <download
      :download-data="$store.state.ideas"
      file-type="json"
      file-name="Ideas"
      class="periodic_table"
      button-text="Save Evaluation"
    >
    </download>
    <div class="classification">
      <h3>Novel Ideas</h3>
    </div>
    <div class="classification notNovel">
      <h3>Not Novel Ideas</h3>
    </div>

    <draggable-items></draggable-items>
  </div>
</template>

<script>
import Download from './Download.vue';
import DraggableItems from './DraggableItems.vue';
export default {
  components: { DraggableItems, Download },
  data() {
    return {
      isDescriptionOpened: false
    };
  },
  methods: {}
};
</script>

<style scoped>
.classification {
  display: flex;
  color: rgb(234, 206, 245);
  justify-content: center;
  align-items: flex-start;
  height: 230px;
  width: 450px;
  background-color: #725e88;
  border-radius: 10%;
}
.notNovel {
  position: absolute;
  bottom: 0;
  right: 0;
}
.periodic_table {
  color: #fff !important;
  font-weight: bold;
  font-size: 15px;
  flex: 1;
  width: 10rem;
  background: rgb(167, 148, 179);
  right: 0;
  position: absolute;
}
</style>
