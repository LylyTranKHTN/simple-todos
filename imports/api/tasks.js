import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export const Tasks = new Mongo.Collection('tasks');

Meteor.methods({
    'tasks.insert' (text){
        check(text,String);
        
        //Make sure the user is logged in before inserting a task
        if(!Meteor.userId()){
            throw new Meteor.Error('not-authorized');
        }
    }
})