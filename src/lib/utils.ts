import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatPhoneNumber(phoneNumber: string) {
	if (phoneNumber.startsWith('0')) {
		return '+234' + phoneNumber.slice(1);
	}
	return phoneNumber;
}
