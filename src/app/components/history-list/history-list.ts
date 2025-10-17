import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { StudentHistory } from '../../models/StudentHistory';
import { StudentService } from '../../services/student';

@Component({
  selector: 'app-history-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
  ],
  templateUrl: './history-list.html',
  styleUrl: './history-list.scss',
})
export class HistoryList {
  histories: StudentHistory[] = [];
  isLoading = true;
  errorMessage = '';

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.loadHistory();

    this.studentService.getHistory().subscribe({
      next: (data) => console.log('Histórico recebido:', data),
    });
  }

  loadHistory(): void {
    this.studentService.getHistory().subscribe({
      next: (data) => {
        this.histories = data;
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = 'Erro ao carregar histórico de estudantes.';
        this.isLoading = false;
        console.error(error);
      },
    });
  }
}
