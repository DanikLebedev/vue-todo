import { Store } from '@/store';
import {ToastServiceMethods} from 'primevue/components/toast/ToastService'

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $store: Store;
        $toast: ToastServiceMethods;
        errorToast: (text: string) => void;
        successToast: (text: string) => void;
    }
}