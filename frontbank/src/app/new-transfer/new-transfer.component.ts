import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { TransferService } from '../services/transfer.service';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss'],
})
export class NewTransferComponent implements OnInit {
  isAddTransfer: boolean;

  submitted: boolean = false;
  loading: boolean = false;

  form: FormGroup;
  id: number;
  value: number;
  destination: string;
  transfer: any;
  options: any = [
    { value: 0, label: 'PIX' },
    { value: 1, label: 'TED' },
    { value: 2, label: 'DOC' },
  ];

  constructor(
    private service: TransferService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddTransfer = !this.id;

    this.form = this.formBuilder.group({
      value: [null, [Validators.required, Validators.min(1), Validators.maxLength(8)]],
      destination: ['', Validators.required],
      transfer: [0, Validators.required],
    });

    if (!this.isAddTransfer) {
      this.service
        .getById(this.id)
        .pipe(first())
        .subscribe((x: any) => this.form.patchValue(x));
    }
  }

  get formField() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      console.error(this.form.value);
      return;
    }

    this.loading = true;
    if (this.isAddTransfer) {
      this.createTransfer();
    } else {
      this.updateTransfer();
    }
  }

  private createTransfer() {
    this.service
      .newTransfer(this.form.value)
      .pipe(first())
      .subscribe({
        next: () =>
          this.router.navigate(['/extracts'], { relativeTo: this.route }),
        error: (error) => {
          console.error(error);
          this.loading = false;
        },
      });
  }

  private updateTransfer() {
    this.service
      .updateTransfer(this.id, this.form.value)
      .pipe(first())
      .subscribe({
        next: () =>
          this.router.navigate(['/extracts'], { relativeTo: this.route }),
        error: (error) => {
          console.error(error);
          this.loading = false;
        },
      });
  }
}
