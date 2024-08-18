import { Adapter, DatabaseSession, DatabaseUser, UserId } from 'lucia';

export class NebordAdapter implements Adapter {
  async deleteExpiredSessions() {}
  async deleteSession(sessionId: string) {}
  async deleteUserSessions(userId: UserId): Promise<void> {}
  async getSessionAndUser(sessionId: string): Promise<[session: DatabaseSession | null, user: DatabaseUser | null]> {
    return [null, null];
  }
  async getUserSessions(userId: UserId): Promise<DatabaseSession[]> {
    return [];
  }
  async setSession(session: DatabaseSession): Promise<void> {}
  async updateSessionExpiration(sessionId: string, expiresAt: Date): Promise<void> {}
}
