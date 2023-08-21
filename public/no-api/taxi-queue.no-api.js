
document.addEventListener('alpine:init', () => {

	Alpine.data('TaxiQueue', () => {

		return {
			version: 'no-api-1.0',
			
			passangerCount: 0,
			taxiCount: 0,

			init(){
				this.passangerCount;
				this.taxiCount;
			},

			joinQueue() {
				this.passangerCount += 1;
			},
			leaveQueue() {
				if(this.passangerCount > 0){
					this.passangerCount -= 1;
				}
				
			},

			joinTaxiQueue() {
				this.taxiCount += 1
			},

			queueLength() {
				return this.passangerCount;
			},

			taxiQueueLength() {
				return this.taxiCount;
			},

			taxiDepart() {
				if(this.passangerCount >=12 && this.taxiCount > 0){
					this.passangerCount -= 12;
					this.taxiCount -= 1;
				}
			}
		}

	});

});

