import axios from 'axios';

export const callMaster = async ({ phone, name }: { phone: string; name: string }) => {
    console.log('AAAAAA sss', { phone, name });

    return axios.post('/api/email/send', { phone, name });
};
