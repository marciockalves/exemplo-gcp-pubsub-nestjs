import { PubSub } from "@google-cloud/pubsub";
import { Injectable } from "@nestjs/common";
import { Observable } from 'rxjs';


@Injectable()
export class PubusbuProvider{
    private pubsub: PubSub;

    constructor(){
        this.pubsub= new PubSub(
            {
                apiEndpoint: 'localhost:8085',
                projectId: 'abc',
                emulatorMode: true,

            }
        );
    }

    async publisher(topicName: string, data: string): Promise<string>{
        const projectTopic = `projects/abc/topics/${topicName}`;
        const topic= this.pubsub.topic(projectTopic);
        const messageId = await topic.publish(Buffer.from(data));
        return messageId;
    }

     subscribe(subscriptionName: string) : Observable<string>{

        const projectSubscriptionName = `projects/abc/subscriptions/${subscriptionName}`
        const subscription = this.pubsub.subscription(projectSubscriptionName);

        return new Observable<string>(observer=>{
            subscription.on('message', message=>{
                observer.next(message.data.toString());
                message.ack();
            });

            subscription.on('error', err=>{
                observer.error(err);
            })
        })
        
     }
    
}