export class ContactService {

    static scriptUrl = 'https://script.google.com/macros/s/AKfycbyt-fBo6C-D8Q90sfVUZCvBIi20CqrOpAcMWPhIDqh9G8onmDcSqGX_zzRrj03DvSQ9vw/exec';

    static async sendForm(data) {
        try {
            const response = await fetch(this.scriptUrl, {
                method: 'POST',
                body: new URLSearchParams(data),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            });
            const responseData = await response.json();
            return responseData.result === 'success';
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}