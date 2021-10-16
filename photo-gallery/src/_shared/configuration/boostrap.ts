import configurationStore from "../store/configurationStore"

export default function bootstrap(){
    const store = configurationStore();
    return store;

}