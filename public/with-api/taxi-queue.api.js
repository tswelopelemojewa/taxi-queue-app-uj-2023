
document.addEventListener('alpine:init', () => {

    Alpine.data('TaxiQueue', () => {

        return {
            version: 'api-1.0',
            taxiLength: 0,
            Length: 0,

            init() {
                this.queueLength();
                this.taxiQueueLength();
            },
            joinQueue() {
                axios.post('/api/passenger/join')
                    .then(result => {
                        console.log(result.data)

                        this.queueLength();

                    });
            },
            leaveQueue() {
                axios.post('/api/passenger/leave')
                    .then(result => {
                        console.log(result.data);

                        this.queueLength();
                    });


            },

            joinTaxiQueue() {
                axios.post('/api/taxi/join')
                    .then(result => {
                        console.log(result.data)

                        this.taxiQueueLength();

                    });
            },

            queueLength() {
                axios
                    .get('/api/passenger/queue')
                    .then(result => {
                        // an example API call
                        this.Length = result.data.passengers[0].passenger_queue_count;
                        console.log(this.Length)
                    });

            },

            taxiQueueLength() {
                axios
                    .get('/api/taxi/queue')
                    .then(result => {
                        // an example API call
                        this.taxiLength = result.data.taxis[0].taxi_queue_count;
                        console.log(this.taxiLength)
                    });
            },

            taxiDepart() {
                if (this.Length >= 12 && this.taxiLength > 0) {
                    axios.post('/api/taxi/depart')
                        .then((result) => {


                            this.queueLength();
                            this.taxiQueueLength();
                            console.log(result.data)


                        });
                }

            }
        }
    });

});
