/* eslint-disable */
/**
 * devopness API
 * Devopness API - Painless essential DevOps to everyone 
 *
 * The version of the OpenAPI document: latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface SocialAccountStatus
 */
export interface SocialAccountStatus {
    /**
     * The name of the Social Authentication provider
     * @type {string}
     * @memberof SocialAccountStatus
     */
    provider?: SocialAccountStatusProviderEnum;
    /**
     * Tells if the provider is already connected to the current user\'s account
     * @type {boolean}
     * @memberof SocialAccountStatus
     */
    connected?: boolean;
    /**
     * A URL path to the provider\'s OAuth page
     * @type {string}
     * @memberof SocialAccountStatus
     */
    connect_url?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum SocialAccountStatusProviderEnum {
    Bitbucket = 'bitbucket',
    Facebook = 'facebook',
    Github = 'github',
    Gitlab = 'gitlab',
    Google = 'google',
    Linkedin = 'linkedin'
}


