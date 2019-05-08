const modulePrefix = '[common]';

export const actionIds = {
    GET_NUMBER_REQUEST_START: `${modulePrefix}[0] Request a new number to the NumberGenerator async service`,
    GET_NUMBER_REQUEST_COMPLETED: `${modulePrefix}[1] NumberGenerator async service returned a new number`,
}

export interface BaseAction {
    type: string;
    payload: any;

}