import { ref } from "vue";
const messages = ref([]);

export const useNotification = () => {
  const setMessage = (msg) => {
    messages.value.push(msg);
    if (messages.value.length) {
      setTimeout(() => {
        messages.value.shift();
      }, 2000);
    }
  };
  return { setMessage, messages };
};
