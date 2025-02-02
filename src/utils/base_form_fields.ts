import Client4 from 'mattermost-redux/client/client4.js';
import {AppCallRequest, AppCallValues} from 'mattermost-redux/types/apps';

import {ZDClient} from 'clients';

import {FieldsBuilder, newFieldsBuilder} from './helper_classes/fields/fields_builder';

const DefaultMinLength = 2;
const DefaultMaxLength = 1024;

// BaseFormFields call provides base methods for retrieving viewable modal app fields
export class BaseFormFields {
    call: AppCallRequest;
    builder: FieldsBuilder;
    zdClient?: ZDClient;
    mmClient: Client4;

    constructor(call: AppCallRequest, mmClient: Client4, zdClient?: ZDClient) {
        this.call = call;
        this.builder = newFieldsBuilder(this.call);
        this.builder.setDefaultMinLength(DefaultMinLength);
        this.builder.setDefaultMaxLength(DefaultMaxLength);
        this.zdClient = zdClient;
        this.mmClient = mmClient;
    }

    getCurrentTeamID(): string {
        return this.call.context.team_id || '';
    }

    getCurrentChannelID(): string {
        return this.call.context.channel_id || '';
    }

    getCallValues(): AppCallValues {
        return this.call.values as AppCallValues;
    }
}
