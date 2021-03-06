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

import { ApiBaseService } from "../../../services/ApiBaseService";
import { ArgumentNullException } from "../../../common/Exceptions";
import { LoginCredentials } from '../../generated/models';
import { User } from '../../generated/models';
import { UserCreate } from '../../generated/models';
import { UserRefreshTokenCreate } from '../../generated/models';
import { UserTokens } from '../../generated/models';

/**
 * UsersApiService - Auto-generated
 */
export class UsersApiService extends ApiBaseService {
    /**
     * 
     * @summary Activate an user account
     */
    public async activateUser(): Promise<object> {
        const response = await this.get <object>(`/users/activate`);
        return response.data;
    }

    /**
     * 
     * @summary Sign up/register a new user
     * @param {UserCreate} userCreate A JSON object containing user essential data
     */
    public async addUser(userCreate: UserCreate): Promise<void> {
        if (userCreate === null || userCreate === undefined) {
            throw new ArgumentNullException('userCreate', 'addUser');
        }
        const response = await this.post <void, UserCreate>(`/users`, userCreate);
        return response.data;
    }

    /**
     * 
     * @summary Get a user by ID
     * @param {number} id Numeric ID of the user or the string literal &#x60;me&#x60; for the current user
     */
    public async getUser(id: number): Promise<User> {
        if (id === null || id === undefined) {
            throw new ArgumentNullException('id', 'getUser');
        }
        const response = await this.get <User>(`/users/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(id))));
        return response.data;
    }

    /**
     * 
     * @summary Login/create a new token for the given credentials
     * @param {LoginCredentials} loginCredentials A JSON object containing user credentials
     */
    public async login(loginCredentials: LoginCredentials): Promise<UserTokens> {
        if (loginCredentials === null || loginCredentials === undefined) {
            throw new ArgumentNullException('loginCredentials', 'login');
        }
        const response = await this.post <UserTokens, LoginCredentials>(`/users/login`, loginCredentials);
        return response.data;
    }

    /**
     * 
     * @summary Logout/revoke an existing token
     */
    public async logout(): Promise<void> {
        const response = await this.get <void>(`/users/logout`);
        return response.data;
    }

    /**
     * 
     * @summary Refresh an existing user access token
     * @param {UserRefreshTokenCreate} userRefreshTokenCreate A JSON object containing user essential data
     */
    public async refreshToken(userRefreshTokenCreate: UserRefreshTokenCreate): Promise<UserTokens> {
        if (userRefreshTokenCreate === null || userRefreshTokenCreate === undefined) {
            throw new ArgumentNullException('userRefreshTokenCreate', 'refreshToken');
        }
        const response = await this.post <UserTokens, UserRefreshTokenCreate>(`/users/refresh-token`, userRefreshTokenCreate);
        return response.data;
    }
}
