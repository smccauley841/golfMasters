import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OddsService {
  private jsonUrl = 'assets/playerOdds.json';

  constructor(private http: HttpClient) {}

  getOdds(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonUrl).pipe(
      catchError((error: any) => {
        console.error('Error reading JSON file:', error);
        return of([]); // Return empty array in case of error
      })
    );
  }

  convertDecimalToFraction(decimalOdds: number): string {
    // Ensure decimalOdds is a number
    if (typeof decimalOdds !== 'number') {
      throw new Error('Input must be a number');
    }

    // Ensure decimalOdds is greater than or equal to 1
    if (decimalOdds < 1) {
      throw new Error('Decimal odds must be greater than or equal to 1');
    }

    // Find the greatest common divisor (GCD) using the Euclidean algorithm
    function gcd(a: number, b: number): number {
      return b ? gcd(b, a % b) : a;
    }

    // Get the denominator by multiplying the decimal odds by 100
    let denominator = 100;

    // Get the numerator by rounding the result
    let numerator = Math.round(decimalOdds * denominator);

    // Reduce the fraction by dividing both numerator and denominator by their greatest common divisor
    const divisor = gcd(numerator, denominator);
    numerator /= divisor;
    denominator /= divisor;

    // Return the fraction as a string
    return `${numerator}/${denominator}`;
  }
}
