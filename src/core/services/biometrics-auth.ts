import { EncryptedKey, EncryptedStore } from "@/src/external/encrypted-store";
import {
  Biometrics,
  BiometricsSecurityLevel,
} from "@/src/external/local-authentication";

export interface IBiometricsService {
  savePassword: (password: string) => Promise<void>;
  getStoredPassword: () => Promise<string | null>;
}

export class BiometricAuthService {
  private constructor() {}

  static create(): IBiometricsService {
    return new BiometricAuthService();
  }

  private async invokeBiometrics(): Promise<Biometrics.LocalAuthenticationResult> {
    return await Biometrics.authenticateAsync({
      promptMessage: "Autenticar",
      cancelLabel: "Cancelar",
      fallbackLabel: "Usar senha",
      biometricsSecurityLevel: BiometricsSecurityLevel.strong,
    });
  }

  async savePassword(password: string): Promise<void> {
    await EncryptedStore.save(EncryptedKey.userPassword, password);
  }

  async getStoredPassword(): Promise<string | null> {
    try {
      const { success } = await this.invokeBiometrics();

      if (success) {
        return await EncryptedStore.get(EncryptedKey.userPassword);
      }

      return null;
    } catch (error) {
      return null;
    }
  }
}
